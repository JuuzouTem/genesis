import React, { createContext, useState, useContext, useEffect } from 'react';
import { allAchievements } from '../data/achievements';

const LOCAL_STORAGE_KEY = 'projeGenesisUserProgress';
const UserProgressContext = createContext();

export const useUserProgress = () => useContext(UserProgressContext);

const LEVEL_THRESHOLDS = [0, 500, 1500, 4000, 8000, 15000, 25000, 40000, 60000, 85000, 120000];

export const UserProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    try {
      const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        // DÜZELTME: Tüm Set'lerin doğru şekilde yeniden oluşturulması
        return {
          ap: parsed.ap || 0,
          vk: parsed.vk || 0,
          level: parsed.level || 1,
          completedProtocols: new Set(parsed.completedProtocols || []),
          purchasedItems: new Set(parsed.purchasedItems || []),
          unlockedAchievements: new Set(parsed.unlockedAchievements || []),
        };
      }
    } catch (error) {
      console.error("Failed to parse progress from localStorage", error);
    }
    // DÜZELTME: Başlangıç state'inde tüm alanların olması
    return {
      ap: 0, vk: 0, level: 1,
      completedProtocols: new Set(),
      purchasedItems: new Set(),
      unlockedAchievements: new Set(),
    };
  });

  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 4000);
  };
  
  // DÜZELTME: Tek ve birleştirilmiş useEffect
  useEffect(() => {
    // 1. Başarımları kontrol et
    allAchievements.forEach(ach => {
      if (!progress.unlockedAchievements.has(ach.id) && ach.condition(progress)) {
        setProgress(prev => ({
            ...prev,
            unlockedAchievements: new Set(prev.unlockedAchievements).add(ach.id),
        }));
        showNotification(`Kilometre Taşı Ulaşıldı: ${ach.name}`);
      }
    });

    // 2. Seviye atlamayı kontrol et
    const nextLevelThreshold = LEVEL_THRESHOLDS[progress.level];
    if (nextLevelThreshold && progress.ap >= nextLevelThreshold) {
        const newLevel = progress.level + 1;
        setProgress(prev => ({ ...prev, level: newLevel }));
        showNotification(`YETKİNLİK SEVİYESİ ARTTI! YS ${newLevel}'e ulaştın!`);
    }

    // 3. localStorage'a kaydet
    const dataToSave = {
      ...progress,
      completedProtocols: Array.from(progress.completedProtocols),
      purchasedItems: Array.from(progress.purchasedItems),
      unlockedAchievements: Array.from(progress.unlockedAchievements),
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [progress]);

  // DÜZELTME: Sadece state'i güncelleyen tekil fonksiyonlar
  const completeProtocol = (protocol) => {
    if (!progress.completedProtocols.has(protocol.id)) {
      setProgress(prev => ({
        ...prev,
        ap: prev.ap + protocol.ap,
        vk: prev.vk + protocol.vk,
        completedProtocols: new Set(prev.completedProtocols).add(protocol.id),
      }));
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