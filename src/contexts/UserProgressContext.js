import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { allAchievements } from '../data/achievements';
import { protocols } from '../data/protocols';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const UserProgressContext = createContext();

export const useUserProgress = () => useContext(UserProgressContext);

const getFormattedDate = (date) => date.toISOString().split('T')[0];

const LEVEL_THRESHOLDS = [0, 500, 1500, 4000, 8000, 15000, 25000, 40000, 60000, 85000, 120000];

const initialProgress = {
  ap: 0, vk: 0, level: 1,
  completedProtocols: new Set(),
  purchasedItems: new Set(),
  unlockedAchievements: new Set(),
  streak: 0,
  lastStreakUpdate: null,
};

export const UserProgressProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState(initialProgress);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 4000);
  }, []);

  useEffect(() => {
    const fetchUserProgress = async () => {
      if (currentUser) {
        setLoading(true);
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setProgress({
            ap: data.ap || 0,
            vk: data.vk || 0,
            level: data.level || 1,
            completedProtocols: new Set(data.completedProtocols || []),
            purchasedItems: new Set(data.purchasedItems || []),
            unlockedAchievements: new Set(data.unlockedAchievements || []),
            streak: data.streak || 0,
            lastStreakUpdate: data.lastStreakUpdate || null,
          });
        } else {
          await setDoc(userDocRef, {
            ...initialProgress,
            completedProtocols: [],
            purchasedItems: [],
            unlockedAchievements: [],
          });
          setProgress(initialProgress);
        }
        setLoading(false);
      } else {
        setProgress(initialProgress);
        setLoading(false);
      }
    };
    fetchUserProgress();
  }, [currentUser]);

  useEffect(() => {
    if (loading || !currentUser) return;

    const todayStr = getFormattedDate(new Date());
    if (progress.lastStreakUpdate && progress.lastStreakUpdate !== todayStr) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = getFormattedDate(yesterday);
      
      if (progress.lastStreakUpdate !== yesterdayStr) {
        setProgress(prev => ({ ...prev, streak: 0 }));
        showNotification("Seri bozuldu! Bugün yeni bir başlangıç yap.");
      }
    }
  }, [loading, currentUser, progress.lastStreakUpdate, showNotification]);

  useEffect(() => {
    if (!currentUser || loading) return;

    const saveData = async () => {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const dataToSave = {
        ...progress,
        completedProtocols: Array.from(progress.completedProtocols),
        purchasedItems: Array.from(progress.purchasedItems),
        unlockedAchievements: Array.from(progress.unlockedAchievements),
      };
      await updateDoc(userDocRef, dataToSave);
    };

    saveData().catch(error => console.error("Veri kaydedilirken hata:", error));
  }, [progress, currentUser, loading]);
  
  useEffect(() => {
    if (!currentUser || loading) return;

    allAchievements.forEach(ach => {
      if (!progress.unlockedAchievements.has(ach.id) && ach.condition(progress)) {
        setProgress(prev => ({ ...prev, unlockedAchievements: new Set(prev.unlockedAchievements).add(ach.id) }));
        showNotification(`Kilometre Taşı Ulaşıldı: ${ach.name}`);
      }
    });

    const nextLevelThreshold = LEVEL_THRESHOLDS[progress.level];
    if (nextLevelThreshold && progress.ap >= nextLevelThreshold) {
      const newLevel = progress.level + 1;
      setProgress(prev => ({ ...prev, level: newLevel }));
      showNotification(`YETKİNLİK SEVİYESİ ARTTI! YS ${newLevel}'e ulaştın!`);
    }
  }, [progress.ap, progress.completedProtocols.size, progress.purchasedItems.size, progress.level, progress.unlockedAchievements, currentUser, loading, showNotification]);

  // === DÜZELTİLEN BÖLÜM BURASI ===
  const checkDayCompletion = useCallback((currentProgress, seasonKey) => {
    const today = new Date().getDay();
    const todaysCriticalProtocols = (protocols[seasonKey] || [])
      .filter(p => (Array.isArray(p.day) ? p.day.includes(today) : p.day === today) && p.isCritical);

    if (todaysCriticalProtocols.length === 0) return;
    const allCriticalCompleted = todaysCriticalProtocols.every(p => currentProgress.completedProtocols.has(p.id));
    const todayStr = getFormattedDate(new Date());

    if (allCriticalCompleted && currentProgress.lastStreakUpdate !== todayStr) {
      // 1. Yeni seri değerini bir değişkene ata
      const newStreak = progress.streak + 1;
      
      // 2. setProgress içinde yeni değişkeni kullanma (prev hala kullanılabilir)
      setProgress(prev => ({
        ...prev,
        streak: newStreak, // veya prev.streak + 1
        lastStreakUpdate: todayStr,
      }));

      // 3. showNotification içinde YENİ DEĞİŞKENİ kullan
      showNotification(`Seri Devam Ediyor! ${newStreak}. Gün! 🔥`);
    }
  }, [showNotification, progress.streak]); // Bağımlılık dizisine progress.streak eklendi

  const completeProtocol = (protocol, seasonKey) => {
    if (!progress.completedProtocols.has(protocol.id)) {
      const newProgress = {
        ...progress,
        ap: progress.ap + protocol.ap,
        vk: progress.vk + protocol.vk,
        completedProtocols: new Set(progress.completedProtocols).add(protocol.id),
      };
      setProgress(newProgress);
      checkDayCompletion(newProgress, seasonKey);
    }
  };
  
  const purchaseLabItem = (item) => {
    if (progress.vk >= item.cost && !progress.purchasedItems.has(item.id)) {
      setProgress(prev => ({
        ...prev,
        vk: prev.vk - item.cost,
        purchasedItems: new Set(prev.purchasedItems).add(item.id),
      }));
      showNotification(`${item.name} satın alındı!`);
    }
  };

  const value = {
    ...progress,
    loading,
    LEVEL_THRESHOLDS,
    notification,
    completeProtocol,
    purchaseLabItem,
  };

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
};