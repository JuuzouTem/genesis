// src/contexts/UserProgressContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { allAchievements } from '../data/achievements';
import { protocols } from '../data/protocols';

const LOCAL_STORAGE_KEY = 'projeGenesisUserProgress_v3'; // Versiyonu artırarak eski verilerle çakışmayı önle
const UserProgressContext = createContext();

export const useUserProgress = () => useContext(UserProgressContext);

const getFormattedDate = (date) => date.toISOString().split('T')[0];

const LEVEL_THRESHOLDS = [0, 500, 1500, 4000, 8000, 15000, 25000, 40000, 60000, 85000, 120000];

export const UserProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    try {
      const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        return {
          ap: parsed.ap || 0,
          vk: parsed.vk || 0,
          level: parsed.level || 1,
          completedProtocols: new Set(parsed.completedProtocols || []),
          purchasedItems: new Set(parsed.purchasedItems || []),
          unlockedAchievements: new Set(parsed.unlockedAchievements || []),
          streak: parsed.streak || 0,
          lastStreakUpdate: parsed.lastStreakUpdate || null,
        };
      }
    } catch (error) {
      console.error("localStorage'dan ilerleme verisi okunurken hata oluştu:", error);
    }
    return {
      ap: 0, vk: 0, level: 1,
      completedProtocols: new Set(),
      purchasedItems: new Set(),
      unlockedAchievements: new Set(),
      streak: 0,
      lastStreakUpdate: null,
    };
  });

  const [notification, setNotification] = useState(null);

  // Günlük seri sıfırlama kontrolü
  useEffect(() => {
    const todayStr = getFormattedDate(new Date());
    if (progress.lastStreakUpdate && progress.lastStreakUpdate !== todayStr) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = getFormattedDate(yesterday);
      
      // Eğer son güncelleme dünden daha eskiyse seriyi sıfırla
      if (progress.lastStreakUpdate !== yesterdayStr) {
        setProgress(prev => ({ ...prev, streak: 0 }));
        showNotification("Seri bozuldu! Bugün yeni bir başlangıç yap.");
      }
    }
  }, []); // Sadece uygulama ilk yüklendiğinde çalışır

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 4000);
  };

  const checkDayCompletion = (currentProgress, seasonKey) => {
    const today = new Date().getDay();
    const todaysCriticalProtocols = (protocols[seasonKey] || [])
      .filter(p => (Array.isArray(p.day) ? p.day.includes(today) : p.day === today) && p.isCritical);

    if (todaysCriticalProtocols.length === 0) return;

    const allCriticalCompleted = todaysCriticalProtocols.every(p => currentProgress.completedProtocols.has(p.id));

    const todayStr = getFormattedDate(new Date());
    if (allCriticalCompleted && currentProgress.lastStreakUpdate !== todayStr) {
        const newStreak = progress.streak + 1;
        setProgress(prev => ({
            ...prev,
            streak: newStreak,
            lastStreakUpdate: todayStr,
        }));
        showNotification(`Seri Devam Ediyor! ${newStreak}. Gün! 🔥`);
    }
  };

  useEffect(() => {
    // Başarımları ve seviye atlamayı kontrol et
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

    // Veriyi localStorage'a kaydet
    const dataToSave = {
      ...progress,
      completedProtocols: Array.from(progress.completedProtocols),
      purchasedItems: Array.from(progress.purchasedItems),
      unlockedAchievements: Array.from(progress.unlockedAchievements),
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [progress]);

  const completeProtocol = (protocol, seasonKey) => {
    if (!progress.completedProtocols.has(protocol.id)) {
      const newProgress = {
        ...progress,
        ap: progress.ap + protocol.ap,
        vk: progress.vk + protocol.vk,
        completedProtocols: new Set(progress.completedProtocols).add(protocol.id),
      };
      setProgress(newProgress);
      // Not: useEffect'in tetiklenmesini beklemek yerine, güncellenmiş state'i doğrudan yolluyoruz
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