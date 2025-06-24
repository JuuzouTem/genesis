// src/hooks/useSeason.js

import { useState, useEffect } from 'react';

// Yeni, kişiselleştirilmiş ve kademeli sezon planı.
// Tarihler 2025-2026 YKS hazırlık sürecine göre ayarlanmıştır.
const SEASONS = {
  // =========================================================================
  // FAZ 1: YAZ - "TEMEL ATMA OPERASYONU" (TYT AĞIRLIKLI)
  // =========================================================================
  // FAZ 1A: Adaptasyon & TYT Başlangıç (Alışma ve Temel Kavramlar)
  PHASE_1A_ADAPT: { START: new Date('2025-06-17'), END: new Date('2025-07-21') },
  // FAZ 1B: TYT Yoğunlaşma (Tüm TYT Konularının Sistemli Taraması)
  PHASE_1B_INTENSE_TYT: { START: new Date('2025-07-22'), END: new Date('2025-08-25') },
  // FAZ 1C: TYT & 11. Sınıf AYT Sentezi (TYT Denemeleri ve 11. Sınıf Tekrarı)
  PHASE_1C_SYNTHESIS: { START: new Date('2025-08-26'), END: new Date('2025-09-15') },

  // =========================================================================
  // FAZ 2: OKUL DÖNEMİ - "İNŞA OPERASYONU" (AYT AĞIRLIKLI)
  // =========================================================================
  // FAZ 2A: Okul & AYT Dengesi (12. Sınıf Konuları ve TYT Pratiği)
  PHASE_2A_BALANCE: { START: new Date('2025-09-16'), END: new Date('2026-01-24') }, // Sömestr tatili başlangıcı
  // FAZ 2B: AYT Ağırlık & Optimizasyon (AYT'de Derinleşme)
  PHASE_2B_AYT_FOCUS: { START: new Date('2026-01-25'), END: new Date('2026-03-15') },
  
  // =========================================================================
  // FAZ 3: SINAV KAMPI - "SENTEZ OPERASYONU" (DENEME ODAKLI)
  // =========================================================================
  // FAZ 3A: Deneme Maratonu & Eksik Giderme
  PHASE_3A_MARATHON: { START: new Date('2026-03-16'), END: new Date('2026-04-30') },
  // FAZ 3B: Zirve Performans & Zihinsel Hazırlık
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

    if (now >= SEASONS.PHASE_1A_ADAPT.START && now <= SEASONS.PHASE_1A_ADAPT.END) {
      setSeasonInfo({ key: 'phase1a_adapt', name: 'FAZ 1A: Adaptasyon & TYT Başlangıç' });
    } else if (now >= SEASONS.PHASE_1B_INTENSE_TYT.START && now <= SEASONS.PHASE_1B_INTENSE_TYT.END) {
      setSeasonInfo({ key: 'phase1b_intense_tyt', name: 'FAZ 1B: TYT Yoğunlaşma' });
    } else if (now >= SEASONS.PHASE_1C_SYNTHESIS.START && now <= SEASONS.PHASE_1C_SYNTHESIS.END) {
        setSeasonInfo({ key: 'phase1c_synthesis', name: 'FAZ 1C: TYT & 11. Sınıf AYT Sentezi' });
    } else if (now >= SEASONS.PHASE_2A_BALANCE.START && now <= SEASONS.PHASE_2A_BALANCE.END) {
      setSeasonInfo({ key: 'phase2a_balance', name: 'FAZ 2A: Okul & AYT Dengesi' });
    } else if (now >= SEASONS.PHASE_2B_AYT_FOCUS.START && now <= SEASONS.PHASE_2B_AYT_FOCUS.END) {
        setSeasonInfo({ key: 'phase2b_ayt_focus', name: 'FAZ 2B: AYT Ağırlık & Optimizasyon' });
    } else if (now >= SEASONS.PHASE_3A_MARATHON.START && now <= SEASONS.PHASE_3A_MARATHON.END) {
      setSeasonInfo({ key: 'phase3a_marathon', name: 'FAZ 3A: Deneme Maratonu & Eksik Giderme' });
    } else if (now >= SEASONS.PHASE_3B_PEAK_PERFORMANCE.START && now <= SEASONS.PHASE_3B_PEAK_PERFORMANCE.END) {
      setSeasonInfo({ key: 'phase3b_peak_performance', name: 'FAZ 3B: Zirve Performans & Zihinsel Hazırlık' });
    } else if (now >= SEASONS.PHASE_4_POST_YKS.START && now <= SEASONS.PHASE_4_POST_YKS.END) {
      setSeasonInfo({ key: 'phase4_post_yks', name: 'FAZ 4: Değerlendirme & Yenilenme' });
    } else {
      setSeasonInfo({ key: 'off_season', name: 'BEKLEME MODU' });
    }
  }, []);

  return seasonInfo;
};