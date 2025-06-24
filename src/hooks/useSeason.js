// src/hooks/useSeason.js

import { useState, useEffect } from 'react';

// YKS 2026 SAVAŞ PROTOKOLÜ v.SEN-361 - Sıfırdan Dereceye Göre Fazlar
const SEASONS = {
  // =========================================================================
  // FAZ 1: YAZ - "TEMEL İNŞA OPERASYONU" (TYT AĞIRLIKLI)
  // =========================================================================
  // FAZ 1A: Matematik Resüsitasyonu & Temel Alışkanlıklar (İlk 4 Hafta)
  PHASE_1A_REHAB: { START: new Date('2025-06-17'), END: new Date('2025-07-14') },
  // FAZ 1B: TYT İlerleme ve Oturtma (Son 6 Hafta)
  PHASE_1B_TYT_BUILD: { START: new Date('2025-07-15'), END: new Date('2025-08-25') },
  // FAZ 1C: Sentez ve Okula Hazırlık (Okul Öncesi Son 2 Hafta)
  PHASE_1C_SYNTHESIS: { START: new Date('2025-08-26'), END: new Date('2025-09-15') },

  // =========================================================================
  // FAZ 2: OKUL DÖNEMİ - "HİBRİT SAVAŞ OPERASYONU" (TYT & AYT)
  // =========================================================================
  // FAZ 2A: Hibrit Savaş - Okul & YKS (12. Sınıf 1. Dönem)
  PHASE_2A_HYBRID: { START: new Date('2025-09-16'), END: new Date('2026-01-24') },
  // FAZ 2B: AYT Yoğunlaşma (Sömestr Tatili)
  PHASE_2B_AYT_FOCUS: { START: new Date('2026-01-25'), END: new Date('2026-02-08') },
  
  // =========================================================================
  // FAZ 3: SINAV KAMPI - "DENEME OPERASYONU"
  // =========================================================================
  // FAZ 3A: Deneme Modu (2. Dönem başı - 1 Mayıs)
  PHASE_3A_TRIAL_MODE: { START: new Date('2026-02-09'), END: new Date('2026-04-30') },
  // FAZ 3B: Zirve Performans & Zihinsel Hazırlık (Sınava kadar)
  PHASE_3B_PEAK_PERFORMANCE: { START: new Date('2026-05-01'), END: new Date('2026-06-19') }, // Sınav tarihini varsayıyoruz

  // =========================================================================
  // FAZ 4: SINAV SONRASI - "DEĞERLENDİRME FAZI"
  // =========================================================================
  PHASE_4_POST_YKS: { START: new Date('2026-06-22'), END: new Date('2026-09-15') },
};

export const useSeason = () => {
  const [seasonInfo, setSeasonInfo] = useState({ key: 'off_season', name: 'SİSTEM BAŞLATILIYOR...' });

  useEffect(() => {
    const now = new Date();

    if (now >= SEASONS.PHASE_1A_REHAB.START && now <= SEASONS.PHASE_1A_REHAB.END) {
      setSeasonInfo({ key: 'phase1a_rehab', name: 'FAZ 1A: Matematik Resüsitasyonu' });
    } else if (now >= SEASONS.PHASE_1B_TYT_BUILD.START && now <= SEASONS.PHASE_1B_TYT_BUILD.END) {
      setSeasonInfo({ key: 'phase1b_tyt_build', name: 'FAZ 1B: TYT İlerleme ve Oturtma' });
    } else if (now >= SEASONS.PHASE_1C_SYNTHESIS.START && now <= SEASONS.PHASE_1C_SYNTHESIS.END) {
      setSeasonInfo({ key: 'phase1c_synthesis', name: 'FAZ 1C: Sentez ve Okula Hazırlık' });
    } else if (now >= SEASONS.PHASE_2A_HYBRID.START && now <= SEASONS.PHASE_2A_HYBRID.END) {
      setSeasonInfo({ key: 'phase2a_hybrid', name: 'FAZ 2A: Hibrit Savaş - Okul & YKS' });
    } else if (now >= SEASONS.PHASE_2B_AYT_FOCUS.START && now <= SEASONS.PHASE_2B_AYT_FOCUS.END) {
      setSeasonInfo({ key: 'phase2b_ayt_focus', name: 'FAZ 2B: AYT Yoğunlaşma' });
    } else if (now >= SEASONS.PHASE_3A_TRIAL_MODE.START && now <= SEASONS.PHASE_3A_TRIAL_MODE.END) {
      setSeasonInfo({ key: 'phase3a_trial_mode', name: 'FAZ 3A: Deneme Modu' });
    } else if (now >= SEASONS.PHASE_3B_PEAK_PERFORMANCE.START && now <= SEASONS.PHASE_3B_PEAK_PERFORMANCE.END) {
      setSeasonInfo({ key: 'phase3b_peak_performance', name: 'FAZ 3B: Zirve Performans' });
    } else if (now >= SEASONS.PHASE_4_POST_YKS.START && now <= SEASONS.PHASE_4_POST_YKS.END) {
      setSeasonInfo({ key: 'phase4_post_yks', name: 'FAZ 4: Değerlendirme & Yenilenme' });
    } else {
      setSeasonInfo({ key: 'off_season', name: 'BEKLEME MODU' });
    }
  }, []);

  return seasonInfo;
};