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
    { id: 'p1a-rutin-1', day: [1,2,3,4,0], time: '10:15-10:45', title: 'Paragraf Rutini', description: 'Her gün 20 paragraf sorusu. Yanlışların nedenini analiz et.', ap: 60, vk: 10, isCritical: true },
    { id: 'p1a-1-1', day: [1, 3], time: '11:00-14:00', title: 'MATEMATİK SIFIR KAMPI', description: 'Antrenmanlarla Mat-1 veya benzeri bir sıfır kitabından günde 2-3 konu bitir. İşlem Yeteneği, Rasyonel Sayılar, Temel Denklemler. Bu, tüm geleceğini belirleyecek.', ap: 300, vk: 35, isCritical: true },
    { id: 'p1a-1-2', day: [1, 3], time: '14:15-16:45', title: 'MATEMATİK SIFIR SORU ÇÖZÜMÜ', description: 'Çalıştığın konulardan en az 70-80 soru çöz. Doğru yapmak değil, öğrenmek amaç.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1a-2-1', day: [2, 4], time: '11:00-14:00', title: 'TYT FEN (9. SINIF) KAMPI', description: 'Bir gün Fizik (Fizik Bilimine Giriş), bir gün Kimya (Kimya Bilimi). Not tut, kendine anlat (Feynman Tekniği).', ap: 280, vk: 30, isCritical: true },
    { id: 'p1a-2-2', day: [2, 4], time: '14:15-16:45', title: 'TYT FEN SORU ÇÖZÜMÜ', description: 'Kolay bir 9. Sınıf Fen Soru Bankasından çalıştığın konuyla ilgili 60 soru çöz.', ap: 220, vk: 25, isCritical: true },
    // Rahatlama
    { id: 'p1a-5-1', day: 5, time: '13:00-15:00', title: 'GEOMETRİ GÜNÜ', description: 'Sıfırdan Üçgenler. Sadece Açıları ve Temel Bağıntıları öğren. Acele etme.', ap: 150, vk: 15, isCritical: true },
    { id: 'p1a-5-2', day: 5, time: '15:01-23:59', title: 'TAM DİNLENME & PLANLAMA', description: 'DERS YOK. Zihnini boşalt. Pazar akşamı 30 dk gelecek haftayı planla.', ap: 50, vk: 10, isCritical: false },
    { id: 'p1a-6-1', day: 6, time: '17:00-19:00', title: 'HAFTANIN HATA ANALİZİ', description: 'Bu hafta yapamadığın TÜM soruların çözümünü öğren ve Hata Defterine yaz. Bu en kutsal görevindir.', ap: 350, vk: 40, isCritical: true },
    // Pazar Günü
    { id: 'p1a-0-1', day: 0, time: '11:00-14:00', title: 'TYT BİYOLOJİ (9. SINIF)', description: 'Canlıların Ortak Özellikleri, Temel Bileşenler. Konu + 50 soru.', ap: 220, vk: 25, isCritical: true },
    { id: 'p1a-0-2', day: 0, time: '14:15-16:45', title: 'TYT BİYOLOJİ Soru Çözümü', description: 'Canlıların Ortak Özellikleri, Temel Bileşenler Soru Çözümü', ap: 200, vk: 20, isCritical: true },
  ],

  // =========================================================================
  // FAZ 1B: TYT İLERLEME VE OTURTMA (Yaz Tatili - Son 6 Hafta)
  // AMAÇ: 9. ve 10. Sınıf TYT konularını tamamen bitirmek. Branş denemelerine başlamak.
  // =========================================================================
  phase1b_tyt_build: [
    { id: 'p1b-1-1', day: 1, time: '10:10-13:10', title: 'TYT MAT: Konu İlerleme', description: 'Programına göre sıradaki TYT Mat konusunu (Örn: Üslü-Köklü) bitir. 60+ soru çöz.', ap: 280, vk: 35, isCritical: true },
    { id: 'p1b-1-2', day: 1, time: '13:25-15:25', title: 'TYT FİZİK: Konu İlerleme', description: 'Programına göre sıradaki TYT Fizik konusunu (Örn: Kuvvet-Hareket) bitir. 50+ soru çöz.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-2-1', day: 2, time: '10:10-13:10', title: 'TYT MAT: Konu İlerleme', description: 'Sıradaki TYT Mat konusu (Örn: Çarpanlara Ayırma) + 60+ soru.', ap: 280, vk: 35, isCritical: true },
    { id: 'p1b-2-2', day: 2, time: '13:25-15:25', title: 'TYT KİMYA: Konu İlerleme', description: 'Sıradaki TYT Kimya konusu (Örn: Mol Kavramı) + 50+ soru.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-3-1', day: 3, time: 'Aynı Döngü', title: 'TYT MAT & TYT BİYOLOJİ Günü', description: 'Pazartesi ve Salı formatında devam et.', ap: 530, vk: 65, isCritical: true },
    { id: 'p1b-4-1', day: 4, time: 'Aynı Döngü', title: 'TYT MAT & TYT GEOMETRİ Günü', description: 'Pazartesi ve Salı formatında devam et.', ap: 530, vk: 65, isCritical: true },
    { id: 'p1b-5-1', day: 5, time: '13:00-14:40', title: 'TYT TÜRKÇE BRANŞ DENEMESİ', description: 'Süre tutarak çöz. Sadece yanlış analizi yap.', ap: 200, vk: 25, isCritical: true },
    { id: 'p1b-5-2', day: 5, time: '15:00-17:00', title: 'HAFTALIK HATA ANALİZİ', description: 'Yine haftanın en önemli görevi. Tüm derslerin hatalarını defterine işle.', ap: 350, vk: 40, isCritical: true },
    { id: 'p1b-6-1', day: 6, time: '13:00-15:00', title: 'TYT MATEMATİK BRANŞ DENEMESİ', description: 'Süre tutarak çöz. Hız ve doğruluk analizi yap.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-0-1', day: 0, time: '10:00-12:00', title: 'TYT FEN BRANŞ DENEMESİ', description: 'Süre tutarak çöz. Bilgi eksiklerini tespit et.', ap: 200, vk: 20, isCritical: true },
    { id: 'p1b-0-2', day: 0, time: 'Kalan Gün', title: 'DİNLENME & PLANLAMA', description: 'Zorunlu dinlenme. Beynin şalterlerini indir.', ap: 50, vk: 10, isCritical: false },
  ],
  
  // =========================================================================
  // FAZ 1C: SENTEZ VE OKULA HAZIRLIK (Okul Açılmadan Önceki 2 Hafta)
  // AMAÇ: Yazın öğrenilenleri TYT Genel Denemeleriyle test etmek. 11. Sınıf AYT konularını hızlıca hatırlamak.
  // =========================================================================
  phase1c_synthesis: [
    { id: 'p1c-ortak-1', day: [1, 4], time: '10:15-13:00', title: 'TYT GENEL DENEME', description: 'Gerçek sınav ciddiyetiyle çöz. Bu senin yaz sonu karnen.', ap: 400, vk: 50, isCritical: true },
    { id: 'p1c-ortak-2', day: [1, 4], time: '13:45-16:45', title: 'TYT DENEME ANALİZİ & TELAFİ', description: 'Analiz sonrası belirlenen en zayıf 3 konudan 30\'ar soru çöz.', ap: 380, vk: 45, isCritical: true },
    { id: 'p1c-2-1', day: 2, time: '10:10-16:10', title: 'AYT MAT (11. Sınıf) HIZLI TEKRAR', description: 'Trigonometri, Analitik Geometri konularını birer orta seviye kaynaktan tara. Bu bir hatırlatma, öğrenme değil.', ap: 300, vk: 35, isCritical: true },
    { id: 'p1c-3-1', day: 3, time: '10:10-16:10', title: 'AYT FEN (11. Sınıf) HIZLI TEKRAR-1', description: 'Fizik (Vektörler, Denge, Enerji) ve Kimya (Gazlar, Çözeltiler) konularını tara.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-5-1', day: 5, time: '10:10-16:10', title: 'AYT FEN (11. Sınıf) HIZLI TEKRAR-2', description: 'Biyoloji (Sinir, Endokrin, Duyu) konularını tara.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-ortak-3', day: [2,3,5,6,0], time: 'Akşam', title: 'ZİHİNSEL DİNLENME', description: 'Okul öncesi son dinlenme periyodu. Enerji topla.', ap: 50, vk: 10, isCritical: false },
  ],

  // =========================================================================
  // FAZ 2A: HİBRİT SAVAŞ - OKUL & YKS (12. Sınıf 1. Dönem)
  // AMAÇ: Okulda işlenen 12. sınıf AYT konularını günü gününe bitirmek, TYT'yi denemelerle sıcak tutmak.
  // =========================================================================
  phase2a_hybrid: [
    { id: 'p2a-ortak-1', day: [1,2,3,4,5], time: '16:00-16:20', title: 'Okuldan Dönüş & Zihinsel Geçiş', description: 'Kısa bir dinlenme ve günün okul derslerinin 15dk hızlı tekrarı.', ap: 40, vk: 5, isCritical: false },
    { id: 'p2a-ortak-2', day: [1,2,3,4], time: '16:20-19:30', title: 'Günün AYT Konu Pekiştirme (12. Sınıf)', description: 'O gün okulda işlenen AYT konusundan 1 kaynaktan test çözümü. Okulda öğren, evde ustalaş!', ap: 250, vk: 30, isCritical: true },
    { id: 'p2a-ortak-3', day: [1,2,3,4], time: '20:30-21:30', title: 'TYT BRANŞ DENEMESİ', description: 'Her akşam farklı bir branş (Mat, Fen, Sos, Tr) denemesi çöz. TYT soğumayacak!', ap: 180, vk: 20, isCritical: true },
    { id: 'p2a-5-1', day: 5, time: '16:20-18:50', title: 'Haftanın AYT Tekrarı (11 ve 12)', description: 'Bu hafta işlenen 12. sınıf konusu + bir 11. sınıf konusundan karma test.', ap: 280, vk: 35, isCritical: true },
    { id: 'p2a-6-1', day: 6, time: '10:15-13:00', title: 'TYT GENEL DENEME', description: 'Hızını ve bilgini korumak için haftalık deneme. Netlerin 70 üzerine çıkmalı.', ap: 400, vk: 50, isCritical: true },
    { id: 'p2a-6-2', day: 6, time: '13:40-16:40', title: 'TYT Deneme Analizi & Telafi', description: 'Analiz ve en zayıf 2 konunun telafisi.', ap: 350, vk: 40, isCritical: true },
    { id: 'p2a-0-1', day: 0, time: '10:15-13:15', title: 'AYT BRANŞ DENEMESİ (Mat veya Fen)', description: 'O ana kadar biten konulardan Matematik veya Fen branş denemesi.', ap: 300, vk: 40, isCritical: true },
    { id: 'p2a-0-2', day: 0, time: '13:15-23:59', title: 'TAM DİNLENME & SOSYAL HAYAT', description: 'Gelecek haftanın planlamasını 30dk\'da yap ve günü tamamen kendine ayır.', ap: 60, vk: 10, isCritical: false },
  ],
  
  // =========================================================================
  // FAZ 2B: AYT YOĞUNLAŞMA (1. Dönem Sonu - Sömestr Tatili)
  // AMAÇ: 11. Sınıf AYT konularını tamamen bitirmek ve 12. Sınıf 1. Dönem konularını eritmek.
  // =========================================================================
  phase2b_ayt_focus: [
    { id: 'p2b-ortak-1', day: [1,2,3,4,5], time: '10:00-16:00', title: 'AYT Konu Kampı (11. Sınıf)', description: 'Her gün bir 11. sınıf konusunu (Mat/Fiz/Kim/Biyo) seç ve 2 farklı kaynaktan bitir.', ap: 400, vk: 50, isCritical: true },
    { id: 'p2b-ortak-2', day: [1,2,3,4,5], time: '16:10-18:45', title: 'AYT Konu Kampı (12. Sınıf)', description: '1. Dönem işlenen konulardan birini seç ve 2 farklı kaynaktan bitir.', ap: 380, vk: 45, isCritical: true },
    { id: 'p2b-6-1', day: 6, time: '10:15-13:15', title: 'AYT GENEL DENEME', description: 'Sömestr sonunda AYT netlerin 40-50 bandına gelmeli.', ap: 500, vk: 60, isCritical: true },
    { id: 'p2b-6-2', day: 6, time: '15:00-18:00', title: 'AYT Deneme Analizi', description: 'Hangi konularda temel bilgi, hangilerinde yorum eksiğin var? Tespit et.', ap: 450, vk: 50, isCritical: true },
    { id: 'p2b-0-1', day: 0, time: '10:15-13:00', title: 'TYT GENEL DENEME', description: 'TYT\'yi asla bırakma. Asla.', ap: 400, vk: 50, isCritical: true },
  ],

  // =========================================================================
  // FAZ 3A: DENEME MODU (12. Sınıf 2. Dönem - 1 Mayıs'a kadar)
  // AMAÇ: Tüm konuları bitirmek. Deneme sıklığını maksimuma çıkarmak.
  // GÜNCELLENMİŞ VERSİYON: Okul saatlerine uygun.
  // =========================================================================
  phase3a_trial_mode: [
     // --- Hafta İçi: Okul Sonrası Etütleri (Pzt, Salı, Çrş, Prş) ---
     { id: 'p3a-w-1', day: [1, 2, 3, 4], time: '16:00-19:15', title: 'Branş Denemesi & Soru Çözümü', description: 'Okuldan sonra 1 AYT veya 2 TYT branş denemesi çöz. Kalan sürede eksik olduğun konudan soru çözümü yap.', ap: 350, vk: 40, isCritical: true },
     { id: 'p3a-w-2', day: [1, 2, 3, 4], time: '20:15-23:45', title: 'Eksik Konu Kapatma ve Tekrar', description: 'Yemek sonrası, programdaki ana eksik konulara odaklan veya gün içinde çözdüğün branş denemesinin analizini yap.', ap: 300, vk: 35, isCritical: true },
     
     // --- Cuma: Hata Analizi Günü ---
     { id: 'p3a-5-1', day: 5, time: '16:00-19:15', title: 'Haftalık Hata Analizi (Bölüm 1)', description: 'Hafta içi çözdüğün tüm branş denemelerinin hatalarını belirle ve Hata Defterine işlemeye başla.', ap: 250, vk: 30, isCritical: true },
     { id: 'p3a-5-2', day: 5, time: '20:15-23:00', title: 'Haftalık Hata Analizi (Bölüm 2)', description: 'Hata Defteri üzerinde derinlemesine çalış. Anlamadığın yerleri araştır, çözüm videoları izle.', ap: 250, vk: 30, isCritical: true },

     // --- Hafta Sonu: Gerçek Sınav Provası ---
     { id: 'p3a-6-1', day: 6, time: '10:15-13:00', title: 'TYT GENEL DENEME', description: 'Sınav saatine uygun olarak TYT denemesini çöz. (135 dk)', ap: 420, vk: 50, isCritical: true },
     { id: 'p3a-6-2', day: 6, time: '14:30-18:00', title: 'TYT Deneme Analizi ve Konu Tekrarı', description: 'Denemenin detaylı analizini yap. En çok yanlış yaptığın 2 konuyu tekrar et.', ap: 400, vk: 45, isCritical: true },
     { id: 'p3a-0-1', day: 0, time: '10:15-13:15', title: 'AYT GENEL DENEME', description: 'Sınav saatine uygun olarak AYT denemesini çöz. (180 dk)', ap: 520, vk: 60, isCritical: true },
     { id: 'p3a-0-2', day: 0, time: '15:00-18:30', title: 'AYT Deneme Analizi ve Konu Tekrarı', description: 'Denemenin detaylı analizini yap. Unutulan formülleri ve bilgileri tekrar et.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3a-0-3', day: 0, time: '18:30-23:59', title: 'HAFTALIK DİNLENME VE PLANLAMA', description: 'Haftayı değerlendir, yeni haftayı planla ve zihnini dinlendir. Bu pazar akşamı senin.', ap: 100, vk: 20, isCritical: false },
  ],

  // =========================================================================
  // FAZ 3B: ZİRVE PERFORMANS & ZİHİNSEL HAZIRLIK (1 Mayıs - Sınav)
  // AMAÇ: Sınav stratejisi, zaman yönetimi, psikolojik dayanıklılık.
  // GÜNCELLENMİŞ VERSİYON: Okul saatlerine uygun.
  // =========================================================================
  phase3b_peak_performance: [
     // --- Hafta İçi: Simülasyon Analizi ve Stratejik Tekrar ---
     { id: 'p3b-1-1', day: 1, time: '16:00-19:15', title: 'AYT Simülasyon Analizi', description: 'Pazar günü çözdüğün AYT simülasyonunun derinlemesine analizini yap. Hata tiplerini (bilgi, dikkat, hız, strateji) belirle.', ap: 400, vk: 45, isCritical: true },
     { id: 'p3b-1-2', day: 1, time: '20:15-23:30', title: 'TYT Simülasyon Analizi', description: 'Cumartesi günü çözdüğün TYT simülasyonunun analizini yap. Zaman yönetimi ve turlama tekniğini gözden geçir.', ap: 400, vk: 45, isCritical: true },
     { id: 'p3b-w-1', day: [2, 3, 4], time: '16:00-19:15', title: 'Stratejik Soru Çözümü', description: 'Analizlerde belirlediğin kritik konulardan (örn: AYT Matematik limit-türev-integral) bolca soru çöz.', ap: 350, vk: 40, isCritical: true },
     { id: 'p3b-w-2', day: [2, 3, 4], time: '20:15-23:30', title: 'Hata Defteri & Çıkmış Sorular', description: 'Hata defterindeki tekrar eden yanlışları ve ilgili konunun çıkmış sorularını tekrar çöz.', ap: 350, vk: 40, isCritical: true },
     { id: 'p3b-5-1', day: 5, time: '16:00-22:00', title: 'Zihinsel Hazırlık ve Son Tekrarlar', description: 'Hafta sonu simülasyonları için mental olarak hazırlan. Hata defterini baştan sona oku. Hafif tempolu bir gün geçir.', ap: 250, vk: 30, isCritical: false },

     // --- Hafta Sonu: Gerçek Sınav Simülasyonu ---
     { id: 'p3b-6-1', day: 6, time: '10:15-13:00', title: 'TYT GERÇEK ZAMANLI SİMÜLASYON', description: 'Optik form, kıyafet, su şişesi... Her şey gerçek sınavdaki gibi olsun.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3b-6-2', day: 6, time: '14:30-19:00', title: 'TYT Strateji Analizi', description: 'Sınav sonrası hemen analiz et. Hangi soruda ne kadar zaman harcadın? Turlama tekniğin işe yaradı mı?', ap: 400, vk: 45, isCritical: true },
     { id: 'p3b-0-1', day: 0, time: '10:15-13:15', title: 'AYT GERÇEK ZAMANLI SİMÜLASYON', description: 'Aynı ciddiyetle AYT provanı yap.', ap: 500, vk: 60, isCritical: true },
     { id: 'p3b-0-2', day: 0, time: '14:00-19:00', title: 'AYT Bilgi Kontrol Analizi', description: 'Unuttuğun formüller, karıştırdığın kavramlar var mı? Sadece bu eksiklere odaklan.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3b-0-3', day: 0, time: '20:15-23:59', title: 'MUTLAK ZİHİNSEL DİNLENME', description: 'Dersle ilgili hiçbir şey yok. Zihnini tamamen boşalt. Güvenini tazele. Haftaya hazırsın.', ap: 100, vk: 20, isCritical: false },
  ],

  // =========================================================================
  // FAZ 4: SON DOKUNUŞ VE YENİLENME (Sınav Sonrası)
  // =========================================================================
  phase4_post_yks: [
    { id: 'p4-1', day: [0,1,2,3,4,5,6], time: '00:01-23:59', title: 'ZİHİNSEL VE BEDENSEL RESTORASYON', description: 'Uyu, gez, oku, izle. Yılın yorgunluğunu at.', ap: 100, vk: 20, isCritical: false },
    { id: 'p4-2', day: [0,1,2,3,4,5,6], time: '00:01-23:59', title: 'TERCİH DÖNEMİ ARAŞTIRMASI', description: 'Üniversiteleri, bölümleri, kariyer yollarını stres olmadan, keyifle araştır.', ap: 100, vk: 20, isCritical: false },
  ],
};