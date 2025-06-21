import { useState, useEffect } from 'react';

// Sezon tarihleri, sağlanan programlara göre hassas bir şekilde ayarlandı.
const SEASONS = {
  // Yaz Sezonu - Faz 1: İngilizce Ağırlıklı Hazırlık (1. Program Şablonu)
  SEASON_1_PREP: { START: new Date('2025-06-21'), END: new Date('2025-07-31') },
  // Yaz Sezonu - Faz 2: Yoğun YKS Temposu (2. Program Şablonu)
  SEASON_1_INTENSE: { START: new Date('2025-08-01'), END: new Date('2025-09-15') },
  // Okul Dönemi (3. Program Şablonu)
  SEASON_2_SCHOOL: { START: new Date('2025-09-16'), END: new Date('2026-03-15') },
  // YKS Kampı (4. ve 5. Program Şablonu - En detaylı olanı esas alındı)
  SEASON_3_CAMP: { START: new Date('2026-03-16'), END: new Date('2026-06-21') },
  // YKS Sonrası - Sonuç ve Tercih Dönemi
  SEASON_4_POST_YKS: { START: new Date('2026-06-22'), END: new Date('2026-09-15') },
};

export const useSeason = () => {
  const [seasonInfo, setSeasonInfo] = useState({ key: 'off_season', name: 'SİSTEM BAŞLATILIYOR...' });

  useEffect(() => {
    const now = new Date();
    // const now = new Date('2025-08-05'); // FARKLI SEZONLARI TEST ETMEK İÇİN TARİHİ DEĞİŞTİREBİLİRSİN

    if (now >= SEASONS.SEASON_1_PREP.START && now <= SEASONS.SEASON_1_PREP.END) {
      setSeasonInfo({ key: 'season1_prep', name: 'KURULUM: İngilizce Hazırlık Fazı' });
    } else if (now >= SEASONS.SEASON_1_INTENSE.START && now <= SEASONS.SEASON_1_INTENSE.END) {
      setSeasonInfo({ key: 'season1_intense', name: 'KURULUM: Yoğun YKS Fazı' });
    } else if (now >= SEASONS.SEASON_2_SCHOOL.START && now <= SEASONS.SEASON_2_SCHOOL.END) {
      setSeasonInfo({ key: 'season2_school', name: 'DENEY: Okul Dönemi' });
    } else if (now >= SEASONS.SEASON_3_CAMP.START && now <= SEASONS.SEASON_3_CAMP.END) {
      setSeasonInfo({ key: 'season3_camp', name: 'SENTEZ: Nihai YKS Kampı' });
    } else if (now >= SEASONS.SEASON_4_POST_YKS.START && now <= SEASONS.SEASON_4_POST_YKS.END) {
      setSeasonInfo({ key: 'season4_post_yks', name: 'SONUÇ: Değerlendirme Fazı' });
    } else {
      setSeasonInfo({ key: 'off_season', name: 'BEKLEME MODU' });
    }
  }, []);

  return seasonInfo;
};