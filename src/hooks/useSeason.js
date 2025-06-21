import { useState, useEffect } from 'react';

// Sezon tarihleri
const SEASONS = {
  SEASON_1_START: new Date('2024-06-01'),
  SEASON_1_END: new Date('2025-09-15'),
  SEASON_2_START: new Date('2025-09-16'),
  SEASON_2_END: new Date('2026-03-15'),
  SEASON_3_START: new Date('2026-03-16'),
  SEASON_3_END: new Date('2026-06-21'),
  SEASON_4_START: new Date('2026-06-22'),
  SEASON_4_END: new Date('2026-09-15'), // Üniversite başlangıcı tahmini
};

export const useSeason = () => {
  const [seasonInfo, setSeasonInfo] = useState({ key: 'season1', name: 'KURULUM' });

  useEffect(() => {
    const now = new Date();
    // const now = new Date('2025-10-01'); // TEST İÇİN TARİHİ DEĞİŞTİREBİLİRSİN

    if (now >= SEASONS.SEASON_1_START && now <= SEASONS.SEASON_1_END) {
      setSeasonInfo({ key: 'season1', name: 'KURULUM' });
    } else if (now >= SEASONS.SEASON_2_START && now <= SEASONS.SEASON_2_END) {
      setSeasonInfo({ key: 'season2', name: 'DENEY' });
    } else if (now >= SEASONS.SEASON_3_START && now <= SEASONS.SEASON_3_END) {
      setSeasonInfo({ key: 'season3', name: 'SENTEZ' });
    } else if (now >= SEASONS.SEASON_4_START && now <= SEASONS.SEASON_4_END) {
      setSeasonInfo({ key: 'season4', name: 'SONUÇ' });
    } else {
      setSeasonInfo({ key: 'off_season', name: 'BEKLEME MODU' });
    }
  }, []);

  return seasonInfo;
};