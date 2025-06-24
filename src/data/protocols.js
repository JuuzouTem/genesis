// src/data/protocols.js

// YKS 2026 SAVAŞ PROTOKOLÜ v.SEN-361 - Sıfırdan Dereceye
// day: 0=Pazar, 1=Pzt, 2=Salı, 3=Çrş, 4=Prş, 5=Cuma, 6=Cmt
// isCritical: true ise görevin tamamlanması günlük seriyi (streak) etkiler.

export const protocols = {
  // =========================================================================
  // FAZ 1A: MATEMATİK RESÜSİTASYONU & TEMEL ALIŞKANLIKLAR (Yaz Tatili - İlk 4 Hafta)
  // AMAÇ: Tüm YKS sürecini ayakta tutacak olan 7. ve 9. Sınıf MAT/FEN temellerini atmak. AYT KESİNLİKLE YASAK.
  // =========================================================================
  phase1a_rehab: [
    // Haftanın Odakları
    { id: 'p1a-1-1', day: [1, 3], time: '10:00-13:00', title: 'MATEMATİK SIFIR KAMPI', description: 'Antrenmanlarla Mat-1 veya benzeri bir sıfır kitabından günde 2-3 konu bitir. İşlem Yeteneği, Rasyonel Sayılar, Temel Denklemler. Bu, tüm geleceğini belirleyecek.', ap: 300, vk: 35, isCritical: true },
    { id: 'p1a-1-2', day: [1, 3], time: '14:30-17:00', title: 'MATEMATİK SIFIR SORU ÇÖZÜMÜ', description: 'Çalıştığın konulardan en az 70-80 soru çöz. Doğru yapmak değil, öğrenmek amaç.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1a-2-1', day: [2, 4], time: '10:00-13:00', title: 'TYT FEN (9. SINIF) KAMPI', description: 'Bir gün Fizik (Fizik Bilimine Giriş), bir gün Kimya (Kimya Bilimi). Not tut, kendine anlat (Feynman Tekniği).', ap: 280, vk: 30, isCritical: true },
    { id: 'p1a-2-2', day: [2, 4], time: '14:30-17:00', title: 'TYT FEN SORU ÇÖZÜMÜ', description: 'Kolay bir 9. Sınıf Fen Soru Bankasından çalıştığın konuyla ilgili 60 soru çöz.', ap: 220, vk: 25, isCritical: true },
    // Haftanın Rutinleri ve Analizi
    { id: 'p1a-5-1', day: 5, time: '10:00-12:00', title: 'TYT BİYOLOJİ (9. SINIF)', description: 'Canlıların Ortak Özellikleri, Temel Bileşenler. Konu + 50 soru.', ap: 200, vk: 20, isCritical: true },
    { id: 'p1a-5-2', day: 5, time: '14:00-17:00', title: 'HAFTANIN HATA ANALİZİ', description: 'Bu hafta yapamadığın TÜM soruların çözümünü öğren ve Hata Defterine yaz. Bu en kutsal görevindir.', ap: 350, vk: 40, isCritical: true },
    { id: 'p1a-rutin-1', day: [1,2,3,4,5,6], time: '09:30-10:00', title: 'Paragraf Rutini', description: 'Her gün 20 paragraf sorusu. Yanlışların nedenini analiz et.', ap: 60, vk: 10, isCritical: true },
    // Hafta Sonu
    { id: 'p1a-6-1', day: 6, time: '10:00-13:00', title: 'GEOMETRİ GÜNÜ', description: 'Sıfırdan Üçgenler. Sadece Açıları ve Temel Bağıntıları öğren. Acele etme.', ap: 150, vk: 15, isCritical: true },
    { id: 'p1a-0-1', day: 0, time: 'Tüm Gün', title: 'TAM DİNLENME & PLANLAMA', description: 'DERS YOK. Zihnini boşalt. Pazar akşamı 30 dk gelecek haftayı planla.', ap: 50, vk: 10, isCritical: false },
  ],

  // =========================================================================
  // FAZ 1B: TYT İLERLEME VE OTURTMA (Yaz Tatili - Son 6 Hafta)
  // AMAÇ: 9. ve 10. Sınıf TYT konularını tamamen bitirmek. Branş denemelerine başlamak.
  // =========================================================================
  phase1b_tyt_build: [
    { id: 'p1b-1-1', day: 1, time: '09:30-12:30', title: 'TYT MAT: Konu İlerleme', description: 'Programına göre sıradaki TYT Mat konusunu (Örn: Üslü-Köklü) bitir. 60+ soru çöz.', ap: 280, vk: 35, isCritical: true },
    { id: 'p1b-1-2', day: 1, time: '14:30-16:30', title: 'TYT FİZİK: Konu İlerleme', description: 'Programına göre sıradaki TYT Fizik konusunu (Örn: Kuvvet-Hareket) bitir. 50+ soru çöz.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-2-1', day: 2, time: '09:30-12:30', title: 'TYT MAT: Konu İlerleme', description: 'Sıradaki TYT Mat konusu (Örn: Çarpanlara Ayırma) + 60+ soru.', ap: 280, vk: 35, isCritical: true },
    { id: 'p1b-2-2', day: 2, time: '14:30-16:30', title: 'TYT KİMYA: Konu İlerleme', description: 'Sıradaki TYT Kimya konusu (Örn: Mol Kavramı) + 50+ soru.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-3-1', day: 3, time: 'Aynı Döngü', title: 'TYT MAT & TYT BİYOLOJİ Günü', description: 'Pazartesi ve Salı formatında devam et.', ap: 530, vk: 65, isCritical: true },
    { id: 'p1b-4-1', day: 4, time: 'Aynı Döngü', title: 'TYT MAT & TYT GEOMETRİ Günü', description: 'Pazartesi ve Salı formatında devam et.', ap: 530, vk: 65, isCritical: true },
    { id: 'p1b-5-1', day: 5, time: '10:00-11:40', title: 'TYT TÜRKÇE BRANŞ DENEMESİ', description: 'Süre tutarak çöz. Sadece yanlış analizi yap.', ap: 200, vk: 25, isCritical: true },
    { id: 'p1b-5-2', day: 5, time: '14:00-16:00', title: 'HAFTALIK HATA ANALİZİ', description: 'Yine haftanın en önemli görevi. Tüm derslerin hatalarını defterine işle.', ap: 350, vk: 40, isCritical: true },
    { id: 'p1b-6-1', day: 6, time: '10:00-12:00', title: 'TYT MATEMATİK BRANŞ DENEMESİ', description: 'Süre tutarak çöz. Hız ve doğruluk analizi yap.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-0-1', day: 0, time: '10:00-12:00', title: 'TYT FEN BRANŞ DENEMESİ', description: 'Süre tutarak çöz. Bilgi eksiklerini tespit et.', ap: 200, vk: 20, isCritical: true },
    { id: 'p1b-0-2', day: 0, time: 'Kalan Gün', title: 'DİNLENME & PLANLAMA', description: 'Zorunlu dinlenme. Beynin şalterlerini indir.', ap: 50, vk: 10, isCritical: false },
  ],
  
  // =========================================================================
  // FAZ 1C: SENTEZ VE OKULA HAZIRLIK (Okul Açılmadan Önceki 2 Hafta)
  // AMAÇ: Yazın öğrenilenleri TYT Genel Denemeleriyle test etmek. 11. Sınıf AYT konularını hızlıca hatırlamak.
  // =========================================================================
  phase1c_synthesis: [
    { id: 'p1c-ortak-1', day: [1, 4], time: '10:00-12:15', title: 'TYT GENEL DENEME', description: 'Gerçek sınav ciddiyetiyle çöz. Bu senin yaz sonu karnen.', ap: 400, vk: 50, isCritical: true },
    { id: 'p1c-ortak-2', day: [1, 4], time: '14:00-17:00', title: 'TYT DENEME ANALİZİ & TELAFİ', description: 'Analiz sonrası belirlenen en zayıf 3 konudan 30\'ar soru çöz.', ap: 380, vk: 45, isCritical: true },
    { id: 'p1c-2-1', day: 2, time: '10:00-16:00', title: 'AYT MAT (11. Sınıf) HIZLI TEKRAR', description: 'Trigonometri, Analitik Geometri konularını birer orta seviye kaynaktan tara. Bu bir hatırlatma, öğrenme değil.', ap: 300, vk: 35, isCritical: true },
    { id: 'p1c-3-1', day: 3, time: '10:00-16:00', title: 'AYT FEN (11. Sınıf) HIZLI TEKRAR-1', description: 'Fizik (Vektörler, Denge, Enerji) ve Kimya (Gazlar, Çözeltiler) konularını tara.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-5-1', day: 5, time: '10:00-16:00', title: 'AYT FEN (11. Sınıf) HIZLI TEKRAR-2', description: 'Biyoloji (Sinir, Endokrin, Duyu) konularını tara.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-ortak-3', day: [2,3,5,6,0], time: 'Akşam', title: 'ZİHİNSEL DİNLENME', description: 'Okul öncesi son dinlenme periyodu. Enerji topla.', ap: 50, vk: 10, isCritical: false },
  ],

  // =========================================================================
  // FAZ 2A: HİBRİT SAVAŞ - OKUL & YKS (12. Sınıf 1. Dönem)
  // AMAÇ: Okulda işlenen 12. sınıf AYT konularını günü gününe bitirmek, TYT'yi denemelerle sıcak tutmak.
  // =========================================================================
  phase2a_hybrid: [
    { id: 'p2a-ortak-1', day: [1,2,3,4,5], time: '16:00-17:00', title: 'Okuldan Dönüş & Zihinsel Geçiş', description: 'Kısa bir dinlenme ve günün okul derslerinin 15dk hızlı tekrarı.', ap: 40, vk: 5, isCritical: false },
    { id: 'p2a-ortak-2', day: [1,2,3,4], time: '17:00-19:30', title: 'Günün AYT Konu Pekiştirme (12. Sınıf)', description: 'O gün okulda işlenen AYT konusundan 1 kaynaktan test çözümü. Okulda öğren, evde ustalaş!', ap: 250, vk: 30, isCritical: true },
    { id: 'p2a-ortak-3', day: [1,2,3,4], time: '20:30-21:30', title: 'TYT BRANŞ DENEMESİ', description: 'Her akşam farklı bir branş (Mat, Fen, Sos, Tr) denemesi çöz. TYT soğumayacak!', ap: 180, vk: 20, isCritical: true },
    { id: 'p2a-5-1', day: 5, time: '17:00-19:30', title: 'Haftanın AYT Tekrarı (11 ve 12)', description: 'Bu hafta işlenen 12. sınıf konusu + bir 11. sınıf konusundan karma test.', ap: 280, vk: 35, isCritical: true },
    { id: 'p2a-6-1', day: 6, time: '10:00-12:15', title: 'TYT GENEL DENEME', description: 'Hızını ve bilgini korumak için haftalık deneme. Netlerin 70 üzerine çıkmalı.', ap: 400, vk: 50, isCritical: true },
    { id: 'p2a-6-2', day: 6, time: '14:00-17:00', title: 'TYT Deneme Analizi & Telafi', description: 'Analiz ve en zayıf 2 konunun telafisi.', ap: 350, vk: 40, isCritical: true },
    { id: 'p2a-0-1', day: 0, time: '10:00-13:00', title: 'AYT BRANŞ DENEMESİ (Mat veya Fen)', description: 'O ana kadar biten konulardan Matematik veya Fen branş denemesi.', ap: 300, vk: 40, isCritical: true },
    { id: 'p2a-0-2', day: 0, time: '13:00-23:59', title: 'TAM DİNLENME & SOSYAL HAYAT', description: 'Gelecek haftanın planlamasını 30dk\'da yap ve günü tamamen kendine ayır.', ap: 60, vk: 10, isCritical: false },
  ],
  
  // =========================================================================
  // FAZ 2B: AYT YOĞUNLAŞMA (1. Dönem Sonu - Sömestr Tatili)
  // AMAÇ: 11. Sınıf AYT konularını tamamen bitirmek ve 12. Sınıf 1. Dönem konularını eritmek.
  // =========================================================================
  phase2b_ayt_focus: [
    { id: 'p2b-ortak-1', day: [1,2,3,4,5], time: '09:00-13:00', title: 'AYT Konu Kampı (11. Sınıf)', description: 'Her gün bir 11. sınıf konusunu (Mat/Fiz/Kim/Biyo) seç ve 2 farklı kaynaktan bitir.', ap: 400, vk: 50, isCritical: true },
    { id: 'p2b-ortak-2', day: [1,2,3,4,5], time: '15:00-18:00', title: 'AYT Konu Kampı (12. Sınıf)', description: '1. Dönem işlenen konulardan birini seç ve 2 farklı kaynaktan bitir.', ap: 380, vk: 45, isCritical: true },
    { id: 'p2b-6-1', day: 6, time: '10:00-13:00', title: 'AYT GENEL DENEME', description: 'Sömestr sonunda AYT netlerin 40-50 bandına gelmeli.', ap: 500, vk: 60, isCritical: true },
    { id: 'p2b-6-2', day: 6, time: '15:00-18:00', title: 'AYT Deneme Analizi', description: 'Hangi konularda temel bilgi, hangilerinde yorum eksiğin var? Tespit et.', ap: 450, vk: 50, isCritical: true },
    { id: 'p2b-0-1', day: 0, time: '10:00-12:15', title: 'TYT GENEL DENEME', description: 'TYT\'yi asla bırakma. Asla.', ap: 400, vk: 50, isCritical: true },
  ],

  // =========================================================================
  // FAZ 3A: DENEME MODU (12. Sınıf 2. Dönem - 1 Mayıs'a kadar)
  // AMAÇ: Tüm konuları bitirmek. Deneme sıklığını maksimuma çıkarmak.
  // =========================================================================
  phase3a_trial_mode: [
     { id: 'p3a-1-1', day: 1, time: '10:00-12:15', title: 'TYT GENEL DENEME + Hızlı Analiz', description: 'Deneme sonrası 1 saat içinde hızlıca hatalarını belirle.', ap: 420, vk: 50, isCritical: true },
     { id: 'p3a-1-2', day: 1, time: '14:00-18:00', title: 'AYT EKSİK KONU KAPATMA', description: 'Denemelerde çıkan veya programda kalan son AYT konularını bitir.', ap: 350, vk: 40, isCritical: true },
     { id: 'p3a-2-1', day: 2, time: '10:00-13:00', title: 'AYT GENEL DENEME + Hızlı Analiz', description: 'Deneme sonrası 1 saat içinde hızlıca hatalarını belirle.', ap: 520, vk: 60, isCritical: true },
     { id: 'p3a-2-2', day: 2, time: '15:00-18:00', title: 'TYT EKSİK KONU KAPATMA', description: 'TYT denemesinde çıkan en büyük 2 eksik konuyu temizle.', ap: 300, vk: 35, isCritical: true },
     // Bu döngü Çarşamba (TYT), Perşembe (AYT) olarak devam eder.
     { id: 'p3a-5-1', day: 5, time: '10:00-18:00', title: 'HATA DEFTERİ GÜNÜ', description: 'Hafta içi çözülen 4 denemenin tüm hatalarını derinlemesine analiz et ve defterini güncelle.', ap: 400, vk: 45, isCritical: true },
     { id: 'p3a-6-1', day: 6, time: '10:00-13:00', title: 'AYT Branş Denemesi X2', description: 'En zayıf olduğun 2 AYT branşından birer deneme çöz.', ap: 350, vk: 40, isCritical: true },
     { id: 'p3a-0-1', day: 0, time: '00:01-23:59', title: 'MUTLAK DİNLENME', description: 'Bu tempoda dinlenmezsen, bir sonraki haftayı çıkaramazsın.', ap: 100, vk: 20, isCritical: false },
  ],

  // =========================================================================
  // FAZ 3B: ZİRVE PERFORMANS & ZİHİNSEL HAZIRLIK (1 Mayıs - Sınav)
  // AMAÇ: Sınav stratejisi, zaman yönetimi, psikolojik dayanıklılık.
  // =========================================================================
  phase3b_peak_performance: [
     { id: 'p3b-tek-1', day: [1, 3, 5], time: '10:00-12:15', title: 'TYT GERÇEK ZAMANLI SİMÜLASYON', description: 'Optik form doldurarak, sınav anını birebir yaşa.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3b-tek-2', day: [1, 3, 5], time: '14:00-17:00', title: 'STRATEJİK ANALİZ (TYT)', description: 'Turlama tekniği işe yaradı mı? Zaman yönetimi nasıldı? Hatalar bilgi mi, dikkat mi?', ap: 400, vk: 45, isCritical: true },
     { id: 'p3b-cift-1', day: [2, 4], time: '10:00-13:00', title: 'AYT GERÇEK ZAMANLI SİMÜLASYON', description: 'Optik form doldurarak, sınav anını birebir yaşa.', ap: 500, vk: 60, isCritical: true },
     { id: 'p3b-cift-2', day: [2, 4], time: '15:00-18:00', title: 'BİLGİ KONTROL ANALİZİ (AYT)', description: 'Unutulan formüller, karıştırılan kavramlar üzerine yoğunlaş.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3b-6-1', day: 6, time: '10:00-18:00', title: 'GENEL HATA DEFTERİ TARAMASI', description: 'Yıl boyunca tuttuğun hata defterini baştan sona oku. Tekrar eden hataları belirle.', ap: 300, vk: 30, isCritical: true },
     { id: 'p3b-0-1', day: 0, time: '00:01-23:59', title: 'MUTLAK DİNLENME', description: 'Dersle ilgili hiçbir şey yok. Zihnini tamamen boşalt. Güvenini tazele.', ap: 100, vk: 20, isCritical: false },
  ],

  // =========================================================================
  // FAZ 4: SON DOKUNUŞ VE YENİLENME (Sınav Sonrası)
  // =========================================================================
  phase4_post_yks: [
    { id: 'p4-1', day: [0,1,2,3,4,5,6], time: '00:01-23:59', title: 'ZİHİNSEL VE BEDENSEL RESTORASYON', description: 'Uyu, gez, oku, izle. Yılın yorgunluğunu at.', ap: 100, vk: 20, isCritical: false },
    { id: 'p4-2', day: [0,1,2,3,4,5,6], time: '00:01-23:59', title: 'TERCİH DÖNEMİ ARAŞTIRMASI', description: 'Üniversiteleri, bölümleri, kariyer yollarını stres olmadan, keyifle araştır.', ap: 100, vk: 20, isCritical: false },
  ],
};