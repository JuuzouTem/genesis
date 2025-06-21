// src/data/protocols.js

// PROTOKOL VERİTABANI v3.0 - Seri ve Zaman Kilidi Uyumlu
// day: 0=Pazar, 1=Pzt, 2=Salı, 3=Çrş, 4=Prş, 5=Cuma, 6=Cmt
// isCritical: Seriyi etkileyen görevler için true, etkilemeyenler için false.

export const protocols = {
  // =========================================================================
  // SEZON 1A: İNGİLİZCE HAZIRLIK FAZI
  // =========================================================================
  season1_prep: [
    // Pazartesi
    { id: 's1a-1-1', day: 1, time: '10:00-12:00', title: 'Akademik Okuma Protokolü', description: 'Nature, Science gibi kaynaklardan makale okuma ve veri sentezleme.', ap: 150, vk: 20, isCritical: true },
    { id: 's1a-1-2', day: 1, time: '14:00-16:00', title: 'Akademik Yazım Simülasyonu', description: 'Okunan makale hakkında TOEFL/IELTS formatında eleştirel özet oluşturma.', ap: 120, vk: 15, isCritical: true },
    { id: 's1a-1-3', day: 1, time: '19:00-21:00', title: 'Zihinsel Dekontaminasyon Matrisi (İngilizce)', description: 'Film, dizi, roman veya YouTube ile İngilizce dilinde rahatlama.', ap: 40, vk: 5, isCritical: false },
    // Salı
    { id: 's1a-2-1', day: 2, time: '10:00-12:00', title: 'Yoğun Veri Alımı (Dinleme)', description: 'Akademik dersler, TED konuşmaları, belgeseller üzerinden not alarak veri işleme.', ap: 130, vk: 15, isCritical: true },
    { id: 's1a-2-2', day: 2, time: '14:00-16:00', title: 'Dilsel Etkileşim Simülasyonu', description: 'iTalki/Cambly üzerinde 1 saatlik canlı konuşma pratiği.', ap: 200, vk: 30, isCritical: true },
    { id: 's1a-2-3', day: 2, time: '19:00-21:00', title: 'Veri Depolama ve Tekrarı (Anki)', description: 'Günün yeni akademik kelimelerini Anki veritabanına ekleme ve tekrar etme.', ap: 100, vk: 10, isCritical: true },
    // Çarşamba
    { id: 's1a-3-1', day: 3, time: '10:00-12:00', title: 'Akademik Okuma Protokolü', ap: 150, vk: 20, isCritical: true },
    { id: 's1a-3-2', day: 3, time: '14:00-16:00', title: 'Akademik Yazım Simülasyonu', ap: 120, vk: 15, isCritical: true },
    { id: 's1a-3-3', day: 3, time: '19:00-21:00', title: 'Zihinsel Dekontaminasyon Matrisi (İngilizce)', ap: 40, vk: 5, isCritical: false },
    // Perşembe
    { id: 's1a-4-1', day: 4, time: '10:00-12:00', title: 'Yoğun Veri Alımı (Dinleme)', ap: 130, vk: 15, isCritical: true },
    { id: 's1a-4-2', day: 4, time: '14:00-16:00', title: 'Dilsel Etkileşim Simülasyonu', ap: 200, vk: 30, isCritical: true },
    { id: 's1a-4-3', day: 4, time: '19:00-21:00', title: 'Veri Depolama ve Tekrarı (Anki)', ap: 100, vk: 10, isCritical: true },
    // Cuma
    { id: 's1a-5-1', day: 5, time: '10:00-12:00', title: 'Akademik Okuma Protokolü', ap: 150, vk: 20, isCritical: true },
    { id: 's1a-5-2', day: 5, time: '14:00-16:00', title: 'Akademik Yazım Simülasyonu', ap: 120, vk: 15, isCritical: true },
    { id: 's1a-5-3', day: 5, time: '19:00-21:00', title: 'Zihinsel Dekontaminasyon Matrisi (İngilizce)', ap: 40, vk: 5, isCritical: false },
    // Hafta Sonu
    { id: 's1a-6-1', day: 6, time: '00:00-23:59', title: 'SERBEST PROTOKOL / HOBİ', description: 'Zihinsel yenilenme ve sistem soğutma periyodu. Dinlenmek hala önemli!', ap: 50, vk: 10, isCritical: false },
    { id: 's1a-0-1', day: 0, time: '00:00-23:59', title: 'SOSYAL MATRİS / GEZİ', description: 'Sistem kaynaklarını yenilemek için sosyal etkileşim ve keşif.', ap: 50, vk: 10, isCritical: false },
  ],

  // =========================================================================
  // SEZON 1B: YOĞUN YKS FAZI
  // =========================================================================
  season1_intense: [
    // Pazartesi
    { id: 's1b-1-1', day: 1, time: '08:00-11:00', title: 'AYT MAT: Derinlemesine Analiz', ap: 250, vk: 35, isCritical: true },
    { id: 's1b-1-2', day: 1, time: '11:15-13:15', title: 'TYT MAT: Branş Simülasyonu', ap: 180, vk: 25, isCritical: true },
    { id: 's1b-1-3', day: 1, time: '14:30-17:30', title: 'AYT MAT: Soru Sentez Kampı', ap: 300, vk: 40, isCritical: true },
    { id: 's1b-1-4', day: 1, time: '19:00-24:00', title: 'Akşam Protokolü: İngilizce & Hata Analizi', ap: 150, vk: 20, isCritical: true },
    // Salı
    { id: 's1b-2-1', day: 2, time: '08:00-11:00', title: 'AYT FİZİK: Derinlemesine Analiz', ap: 250, vk: 35, isCritical: true },
    { id: 's1b-2-2', day: 2, time: '11:15-13:15', title: 'TYT FEN: Branş Simülasyonu', ap: 180, vk: 25, isCritical: true },
    { id: 's1b-2-3', day: 2, time: '14:30-17:30', title: 'AYT FİZİK: Soru Sentez Kampı', ap: 300, vk: 40, isCritical: true },
    { id: 's1b-2-4', day: 2, time: '19:00-24:00', title: 'Akşam Protokolü: Fiziksel Aktivite', ap: 100, vk: 15, isCritical: false },
    // Çarşamba
    { id: 's1b-3-1', day: 3, time: '08:00-11:00', title: 'AYT MAT: Derinlemesine Analiz', ap: 250, vk: 35, isCritical: true },
    { id: 's1b-3-2', day: 3, time: '11:15-13:15', title: 'TYT MAT: Branş Simülasyonu', ap: 180, vk: 25, isCritical: true },
    { id: 's1b-3-3', day: 3, time: '14:30-17:30', title: 'AYT MAT: Soru Sentez Kampı', ap: 300, vk: 40, isCritical: true },
    { id: 's1b-3-4', day: 3, time: '19:00-24:00', title: 'Akşam Protokolü: İngilizce & Hata Analizi', ap: 150, vk: 20, isCritical: true },
    // Perşembe
    { id: 's1b-4-1', day: 4, time: '08:00-11:00', title: 'AYT KİMYA: Derinlemesine Analiz', ap: 250, vk: 35, isCritical: true },
    { id: 's1b-4-2', day: 4, time: '11:15-13:15', title: 'TYT FEN: Branş Simülasyonu', ap: 180, vk: 25, isCritical: true },
    { id: 's1b-4-3', day: 4, time: '14:30-17:30', title: 'AYT KİMYA: Soru Sentez Kampı', ap: 300, vk: 40, isCritical: true },
    { id: 's1b-4-4', day: 4, time: '19:00-24:00', title: 'Akşam Protokolü: Fiziksel Aktivite', ap: 100, vk: 15, isCritical: false },
    // Cuma
    { id: 's1b-5-1', day: 5, time: '08:00-11:00', title: 'AYT BİYOLOJİ: Derinlemesine Analiz', ap: 260, vk: 40, isCritical: true },
    { id: 's1b-5-2', day: 5, time: '11:15-13:15', title: 'TYT TÜRKÇE & SOSYAL: Simülasyon', ap: 200, vk: 30, isCritical: true },
    { id: 's1b-5-3', day: 5, time: '14:30-17:30', title: 'AYT BİYOLOJİ: Soru Sentez Kampı', ap: 300, vk: 40, isCritical: true },
    { id: 's1b-5-4', day: 5, time: '19:00-24:00', title: 'Akşam Protokolü: Haftalık Planlama', ap: 120, vk: 20, isCritical: true },
    // Cumartesi
    { id: 's1b-6-1', day: 6, time: '08:00-11:00', title: 'AYT GENEL SİMÜLASYON', ap: 400, vk: 50, isCritical: true },
    { id: 's1b-6-2', day: 6, time: '11:15-13:15', title: 'SİMÜLASYON DEVAMI', ap: 100, vk: 10, isCritical: true },
    { id: 's1b-6-3', day: 6, time: '14:30-17:30', title: 'DENEME ANALİZİ (MİKRO)', ap: 200, vk: 30, isCritical: true },
    { id: 's1b-6-4', day: 6, time: '17:45-19:00', title: 'HATASIZLIK OPERASYONU', ap: 150, vk: 25, isCritical: true },
    { id: 's1b-6-5', day: 6, time: '19:00-24:00', title: 'SERBEST ZAMAN / SOSYAL HAYAT', ap: 60, vk: 10, isCritical: false },
    // Pazar
    { id: 's1b-0-1', day: 0, time: '08:00-11:00', title: 'TYT GENEL SİMÜLASYON', ap: 350, vk: 45, isCritical: true },
    { id: 's1b-0-2', day: 0, time: '11:15-13:15', title: 'SİMÜLASYON DEVAMI', ap: 100, vk: 10, isCritical: true },
    { id: 's1b-0-3', day: 0, time: '14:30-17:30', title: 'DENEME ANALİZİ (MİKRO)', ap: 200, vk: 30, isCritical: true },
    { id: 's1b-0-4', day: 0, time: '17:45-19:00', title: 'HATASIZLIK OPERASYONU', ap: 150, vk: 25, isCritical: true },
    { id: 's1b-0-5', day: 0, time: '19:00-24:00', title: 'SERBEST ZAMAN / AİLE', ap: 60, vk: 10, isCritical: false },
  ],
  
  // =========================================================================
  // SEZON 2: OKUL DÖNEMİ
  // =========================================================================
  season2_school: [
    { id: 's2-ortak-1', day: [1,2,3,4,5], time: '15:35-16:30', title: 'Okuldan Geliş & Zihinsel Geçiş', ap: 30, vk: 5, isCritical: false },
    { id: 's2-ortak-2', day: [1,2,3,4], time: '19:00-20:00', title: 'Akşam Yemeği & İngilizce Veri Akışı', ap: 25, vk: 5, isCritical: false },
    { id: 's2-ortak-3', day: [1,2,3,4], time: '20:15-21:15', title: 'Günlük Hata Analizi & Anki Tekrarı', ap: 120, vk: 15, isCritical: true },
    { id: 's2-ortak-4', day: [1,2,3,4,5], time: '21:15-23:00', title: 'Ekranlardan Uzaklaşma ve Zihinsel Dinlenme', ap: 40, vk: 5, isCritical: false },
    // Pazartesi
    { id: 's2-1-1', day: 1, time: '16:45-18:15', title: 'AYT Mat: Konu Pekiştirme', ap: 200, vk: 30, isCritical: true },
    { id: 's2-1-2', day: 1, time: '18:15-19:00', title: 'TYT Mat: Branş Simülasyonu', ap: 150, vk: 20, isCritical: true },
    // Salı
    { id: 's2-2-1', day: 2, time: '16:45-18:15', title: 'AYT Fizik: Konu Pekiştirme', ap: 200, vk: 30, isCritical: true },
    { id: 's2-2-2', day: 2, time: '18:15-19:00', title: 'AYT Fizik: Branş Simülasyonu', ap: 150, vk: 20, isCritical: true },
    // Çarşamba
    { id: 's2-3-1', day: 3, time: '16:45-18:15', title: 'AYT Mat: Konu Pekiştirme', ap: 200, vk: 30, isCritical: true },
    { id: 's2-3-2', day: 3, time: '18:15-19:00', title: 'TYT Türkçe: Branş Simülasyonu', ap: 150, vk: 20, isCritical: true },
    // Perşembe
    { id: 's2-4-1', day: 4, time: '16:45-18:15', title: 'AYT Kimya: Konu Pekiştirme', ap: 200, vk: 30, isCritical: true },
    { id: 's2-4-2', day: 4, time: '18:15-19:00', title: 'AYT Kimya: Branş Simülasyonu', ap: 150, vk: 20, isCritical: true },
    // Cuma
    { id: 's2-5-1', day: 5, time: '16:45-18:15', title: 'AYT Biyo: Konu Pekiştirme', ap: 200, vk: 30, isCritical: true },
    { id: 's2-5-2', day: 5, time: '18:15-19:00', title: 'Serbest YKS Takviyesi', ap: 180, vk: 25, isCritical: true },
    { id: 's2-5-3', day: 5, time: '20:15-21:15', title: 'İngilizce Yazma Pratiği', ap: 100, vk: 15, isCritical: true },
  ],
  
  // =========================================================================
  // SEZON 3: YKS KAMPI
  // =========================================================================
  season3_camp: [
    { id: 's3-tek-1', day: [1, 3, 5], time: '09:45-12:30', title: 'TYT GENEL SİMÜLASYON', ap: 350, vk: 45, isCritical: true },
    { id: 's3-tek-2', day: [1, 3, 5], time: '13:30-16:30', title: 'TYT Simülasyon Analizi (Öz Değerlendirme)', ap: 300, vk: 40, isCritical: true },
    { id: 's3-tek-3', day: [1, 3, 5], time: '16:45-19:00', title: 'Nokta Atışı Telafi Protokolü (TYT)', ap: 250, vk: 35, isCritical: true },
    { id: 's3-tek-4', day: [1, 3, 5], time: '20:15-21:15', title: 'İngilizce Koruma Modu', ap: 80, vk: 10, isCritical: false },
    { id: 's3-cift-1', day: [2, 4, 6], time: '09:45-12:30', title: 'AYT GENEL SİMÜLASYON', ap: 400, vk: 50, isCritical: true },
    { id: 's3-cift-2', day: [2, 4, 6], time: '13:30-16:30', title: 'AYT Simülasyon Analizi (Bilgi Değerlendirme)', ap: 350, vk: 45, isCritical: true },
    { id: 's3-cift-3', day: [2, 4, 6], time: '16:45-19:00', title: 'Nokta Atışı Telafi Protokolü (AYT)', ap: 220, vk: 30, isCritical: true },
    { id: 's3-cift-4', day: [2, 4, 6], time: '20:15-21:15', title: 'Hata Defteri & Formül Tekrarı', ap: 100, vk: 15, isCritical: true },
    { id: 's3-0-1', day: 0, time: '00:00-23:59', title: 'TAMAMEN AKTİF DİNLENME', ap: 70, vk: 20, isCritical: false },
  ],
  
  // =========================================================================
  // SEZON 4: YKS SONRASI
  // =========================================================================
  season4_post_yks: [
    { id: 's4-1', day: [0,1,2,3,4,5,6], time: '00:00-23:59', title: 'Sonuç Değerlendirme ve Tercih Araştırması', ap: 100, vk: 20, isCritical: false },
    { id: 's4-2', day: [0,1,2,3,4,5,6], time: '00:00-23:59', title: 'Yeni Bir Beceri Geliştir', ap: 80, vk: 15, isCritical: false },
    { id: 's4-3', day: [0,1,2,3,4,5,6], time: '00:00-23:59', title: 'Zihinsel Dekontaminasyon', ap: 50, vk: 10, isCritical: false },
  ],
};