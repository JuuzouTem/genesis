// src/data/protocols.js

// PROTOKOL VERİTABANI v4.0 - Kişiselleştirilmiş ve Kademeli İlerleme Modeli
// day: 0=Pazar, 1=Pzt, 2=Salı, 3=Çrş, 4=Prş, 5=Cuma, 6=Cmt
// isCritical: true ise görevin tamamlanması günlük seriyi (streak) etkiler.

export const protocols = {
  // =========================================================================
  // FAZ 1A: ADAPTASYON & TYT BAŞLANGIÇ (17 Haziran - 21 Temmuz)
  // AMAÇ: Hafif bir başlangıçla çalışma alışkanlığı kazanmak, 9. ve 10. sınıf temel eksiklerini (özellikle Mat/Fen) kapatmak.
  // =========================================================================
  phase1a_adapt: [
    // Her Gün Başlangıç ve Bitiş
    { id: 'p1a-ortak-1', day: [1,2,3,4,5], time: '09:00-09:30', title: 'Güne Başlangıç Ritüeli', description: 'Günün planını gözden geçir, Anki ile 15dk kelime/formül tekrarı yap.', ap: 50, vk: 5, isCritical: true },
    { id: 'p1a-ortak-2', day: [1,2,3,4,5], time: '17:00-19:00', title: 'Zihinsel Dekontaminasyon', description: 'Spor, yürüyüş, müzik veya İngilizce pratik (dizi/film) ile dinlenme.', ap: 30, vk: 5, isCritical: false },
    // Dersler
    { id: 'p1a-1-1', day: 1, time: '09:30-12:00', title: 'TYT MAT: Temel Kavramlar', description: 'Sayılar, basamak kavramları, bölme-bölünebilme gibi temel konuları bitir ve 50 soru çöz.', ap: 200, vk: 25, isCritical: true },
    { id: 'p1a-1-2', day: 1, time: '14:00-16:00', title: 'TYT FİZİK: Fizik Bilimine Giriş & Madde', description: 'Konu çalışması ve temel düzeyde 40 soru çözümü.', ap: 180, vk: 20, isCritical: true },
    { id: 'p1a-2-1', day: 2, time: '09:30-12:00', title: 'TYT TÜRKÇE: Paragraf Stratejileri', description: 'Günlük 25 paragraf sorusu rutinini başlat. Farklı soru tiplerini analiz et.', ap: 150, vk: 15, isCritical: true },
    { id: 'p1a-2-2', day: 2, time: '14:00-16:00', title: 'TYT KİMYA: Kimya Bilimi & Atom', description: 'Konu çalışması ve 40 soru çözümü.', ap: 180, vk: 20, isCritical: true },
    { id: 'p1a-3-1', day: 3, time: '09:30-12:00', title: 'TYT MAT: Oran-Orantı & Problemler-1', description: 'Problem tiplerine giriş yap ve 50 soru çöz.', ap: 220, vk: 30, isCritical: true },
    { id: 'p1a-3-2', day: 3, time: '14:00-16:00', title: 'TYT BİYOLOJİ: Canlıların Ortak Özellikleri', description: 'Konu çalışması ve 40 soru çözümü.', ap: 180, vk: 20, isCritical: true },
    // Perşembe ve Cuma, Pazartesi ve Salı'yı tekrar eder (Interleaving)
    { id: 'p1a-4-1', day: 4, time: '09:30-12:00', title: 'TYT MAT: Temel Kavramlar Tekrar', description: 'Hafta başı konularından zorlandığın yerleri tekrar et ve 50 karma soru çöz.', ap: 200, vk: 25, isCritical: true },
    { id: 'p1a-4-2', day: 4, time: '14:00-16:00', title: 'TYT FİZİK: Hareket ve Kuvvet-1', description: 'Yeni konuya geçiş ve 40 soru.', ap: 180, vk: 20, isCritical: true },
    { id: 'p1a-5-1', day: 5, time: '09:30-12:00', title: 'TYT TÜRKÇE: Dil Bilgisi Başlangıç', description: 'Ses bilgisi, yazım kuralları gibi temel konuları bitir. 25 paragraf rutini devam.', ap: 150, vk: 15, isCritical: true },
    { id: 'p1a-5-2', day: 5, time: '14:00-16:00', title: 'HAFTALIK HATA ANALİZİ', description: 'Bu hafta çözdüğün tüm yanlış soruları analiz et, nedenlerini anla ve Hata Defterine kaydet.', ap: 250, vk: 35, isCritical: true },
    // Hafta Sonu
    { id: 'p1a-6-1', day: 6, time: 'Tüm Gün', title: 'SERBEST PROTOKOL', description: 'Zihinsel yenilenme. Aile/arkadaşlarla vakit geçir, hobi edin. Ders yok!', ap: 50, vk: 10, isCritical: false },
    { id: 'p1a-0-1', day: 0, time: 'Tüm Gün', title: 'AKTİF DİNLENME & PLANLAMA', description: 'Uzun bir yürüyüş yap. Gelecek haftanın ders programını ve hedeflerini belirle.', ap: 70, vk: 10, isCritical: false },
  ],

  // =========================================================================
  // FAZ 1B: TYT YOĞUNLAŞMA (22 Temmuz - 25 Ağustos)
  // AMAÇ: Tempoyu artırmak, tüm TYT konularını bitirmek ve branş denemelerine başlamak.
  // =========================================================================
  phase1b_intense_tyt: [
     // Her Gün
    { id: 'p1b-ortak-1', day: [1,2,3,4,5], time: '08:30-09:00', title: 'Sabah Aktivasyonu', description: 'Anki tekrarı ve 20 paragraf sorusu ile zihni açma.', ap: 60, vk: 10, isCritical: true },
    // Ders Döngüsü
    { id: 'p1b-1-1', day: 1, time: '09:00-12:00', title: 'TYT MAT: Konu İlerleme', description: 'Programına göre sıradaki TYT Mat konusunu bitir. (Örn: Kümeler, Fonksiyonlar)', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-1-2', day: 1, time: '13:30-15:30', title: 'TYT MAT: Soru Çözüm Kampı', description: 'Bitirdiğin konuyla ilgili en az 80 soru çöz.', ap: 200, vk: 25, isCritical: true },
    { id: 'p1b-1-3', day: 1, time: '16:00-17:30', title: 'TYT FEN: Branş Denemesi', description: '20 soruluk Fizik/Kimya/Biyo denemesi çöz ve anında analiz et.', ap: 180, vk: 20, isCritical: true },
    { id: 'p1b-2-1', day: 2, time: '09:00-12:00', title: 'TYT FİZİK: Konu İlerleme', description: 'Programına göre sıradaki TYT Fizik konusunu bitir. (Örn: Elektrik, Optik)', ap: 240, vk: 30, isCritical: true },
    { id: 'p1b-2-2', day: 2, time: '13:30-15:30', title: 'TYT FİZİK: Soru Çözüm Kampı', description: 'Bitirdiğin konuyla ilgili en az 70 soru çöz.', ap: 190, vk: 25, isCritical: true },
    { id: 'p1b-2-3', day: 2, time: '16:00-17:30', title: 'TYT MAT: Branş Denemesi', description: '40 soruluk deneme çöz ve hız/doğruluk analizi yap.', ap: 200, vk: 25, isCritical: true },
    // Çarşamba (Mat), Perşembe (Kimya), Cuma (Biyoloji) aynı döngüyü takip eder.
    { id: 'p1b-3-1', day: 3, time: '09:00-12:00', title: 'TYT MAT: Konu İlerleme', description: 'Programına göre sıradaki TYT Mat konusunu bitir.', ap: 250, vk: 30, isCritical: true },
    { id: 'p1b-3-2', day: 3, time: '13:30-17:30', title: 'TYT MAT: Genel Soru Kampı', description: 'Önceki tüm mat konularından oluşan 100 soruluk bir tarama yap.', ap: 280, vk: 35, isCritical: true },
    { id: 'p1b-4-1', day: 4, time: '09:00-12:00', title: 'TYT KİMYA: Konu İlerleme', description: 'Programına göre sıradaki TYT Kimya konusunu bitir.', ap: 240, vk: 30, isCritical: true },
    { id: 'p1b-4-2', day: 4, time: '13:30-15:30', title: 'TYT KİMYA: Soru Çözüm Kampı', description: 'Bitirdiğin konuyla ilgili en az 70 soru çöz.', ap: 190, vk: 25, isCritical: true },
    { id: 'p1b-4-3', day: 4, time: '16:00-17:30', title: 'TYT SOSYAL: Branş Denemesi', description: '20 soruluk Tarih/Coğrafya/Felsefe/Din denemesi çöz ve genel kültürünü test et.', ap: 150, vk: 15, isCritical: true },
    { id: 'p1b-5-1', day: 5, time: '09:00-12:00', title: 'TYT BİYOLOJİ: Konu İlerleme', description: 'Programına göre sıradaki TYT Biyo konusunu bitir.', ap: 240, vk: 30, isCritical: true },
    { id: 'p1b-5-2', day: 5, time: '13:30-15:30', title: 'TYT BİYOLOJİ: Soru Çözüm Kampı', description: 'Bitirdiğin konuyla ilgili en az 70 soru çöz.', ap: 190, vk: 25, isCritical: true },
    { id: 'p1b-5-3', day: 5, time: '16:00-17:30', title: 'TYT TÜRKÇE: Branş Denemesi', description: '40 soruluk deneme çöz ve süre yönetimi analizi yap.', ap: 200, vk: 25, isCritical: true },
    // Hafta Sonu
    { id: 'p1b-6-1', day: 6, time: '10:00-12:15', title: 'TYT GENEL DENEME SİMÜLASYONU', description: 'Gerçek sınav koşullarında (süre, sessizlik) TYT Genel Denemesi uygula.', ap: 400, vk: 50, isCritical: true },
    { id: 'p1b-6-2', day: 6, time: '14:00-17:00', title: 'DERİNLEMESİNE DENEME ANALİZİ', description: 'Sadece yanlışlara değil, boşlara ve yavaş çözülen doğrulara da odaklan. "Neden yanlış yaptım?" sorusunu sor.', ap: 350, vk: 40, isCritical: true },
    { id: 'p1b-0-1', day: 0, time: 'Tüm Gün', title: 'HAFTALIK TELAFİ VE DİNLENME', description: 'Deneme analizinde çıkan en büyük 2 eksiği kapat. Kalan zamanda tamamen dinlen.', ap: 200, vk: 25, isCritical: false },
  ],

  // =========================================================================
  // FAZ 1C: TYT & 11. SINIF AYT SENTEZİ (26 Ağustos - 15 Eylül)
  // AMAÇ: TYT deneme rutinini oturtmak ve okula başlamadan 11. sınıf AYT konularını (en önemlileri) tekrar etmek.
  // =========================================================================
  phase1c_synthesis: [
    { id: 'p1c-ortak-1', day: [1,3,5], time: '10:00-12:15', title: 'TYT GENEL DENEME', ap: 400, vk: 50, isCritical: true },
    { id: 'p1c-ortak-2', day: [1,3,5], time: '14:00-17:00', title: 'TYT DENEME ANALİZİ & NOKTA ATIŞI', description: 'Analiz sonrası belirlenen 2 zayıf konudan 30\'ar soru çöz.', ap: 380, vk: 45, isCritical: true },
    { id: 'p1c-2-1', day: 2, time: '09:30-12:30', title: 'AYT MAT (11. Sınıf) Tekrar', description: 'Trigonometri, Analitik Geometri gibi kilit konuları tekrar et.', ap: 300, vk: 35, isCritical: true },
    { id: 'p1c-2-2', day: 2, time: '14:00-16:00', title: 'AYT FİZİK (11. Sınıf) Tekrar', description: 'Vektörler, Tork-Denge, Enerji konularını tekrar et.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-4-1', day: 4, time: '09:30-12:30', title: 'AYT KİMYA (11. Sınıf) Tekrar', description: 'Gazlar, Çözeltiler, Enerji konularını tekrar et.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-4-2', day: 4, time: '14:00-16:00', title: 'AYT BİYOLOJİ (11. Sınıf) Tekrar', description: 'Sinir Sistemi, Endokrin Sistem konularını tekrar et.', ap: 280, vk: 30, isCritical: true },
    { id: 'p1c-ortak-3', day: [6,0], time: 'Tüm Gün', title: 'OKULA HAZIRLIK & ZİHİNSEL DİNLENME', description: 'Okul öncesi son dinlenme periyodu. Enerji topla.', ap: 50, vk: 10, isCritical: false },
  ],
  
  // FAZ 2A, 2B, 3A, 3B ve 4 de buraya benzer şekilde, okul programı ve artan deneme yoğunluğu göz önüne alınarak eklenecektir.
  // Örnek olarak FAZ 2A'yı da ekliyorum:

  // =========================================================================
  // FAZ 2A: OKUL & AYT DENGESİ (16 Eylül - 24 Ocak)
  // AMAÇ: Okulda işlenen 12. sınıf AYT konularını günü gününe bitirmek, TYT'yi denemelerle sıcak tutmak.
  // =========================================================================
  phase2a_balance: [
    { id: 'p2a-ortak-1', day: [1,2,3,4,5], time: '16:00-17:00', title: 'Okuldan Dönüş & Zihinsel Geçiş', description: 'Kısa bir dinlenme ve günün okul derslerinin 15dk hızlı tekrarı.', ap: 40, vk: 5, isCritical: false },
    { id: 'p2a-ortak-2', day: [1,2,3,4], time: '17:00-19:00', title: 'Günün AYT Konu Pekiştirme', description: 'O gün okulda işlenen AYT konusundan 1 kaynaktan test çözümü. Okulda öğren, evde ustalaş!', ap: 250, vk: 30, isCritical: true },
    { id: 'p2a-ortak-3', day: [1,2,3,4], time: '20:30-21:30', title: 'Günün Hata Analizi & Anki', description: 'Çözülen testlerin analizi ve yeni öğrenilen bilgilerin Anki\'ye eklenmesi.', ap: 150, vk: 15, isCritical: true },
    { id: 'p2a-5-1', day: 5, time: '17:00-19:00', title: 'Haftanın AYT Tekrarı', description: 'Bu hafta işlenen tüm AYT konularından karma test çözümü.', ap: 280, vk: 35, isCritical: true },
    { id: 'p2a-6-1', day: 6, time: '10:00-12:15', title: 'TYT GENEL DENEME', description: 'TYT hızını ve bilgini korumak için haftalık deneme.', ap: 400, vk: 50, isCritical: true },
    { id: 'p2a-6-2', day: 6, time: '14:00-17:00', title: 'TYT Deneme Analizi & Telafi', description: 'Analiz ve en zayıf 2 konunun telafisi.', ap: 350, vk: 40, isCritical: true },
    { id: 'p2a-0-1', day: 0, time: '10:00-13:00', title: 'AYT BRANŞ DENEMESİ', description: 'O ana kadar biten konulardan Matematik veya Fen branş denemesi.', ap: 300, vk: 40, isCritical: true },
    { id: 'p2a-0-2', day: 0, time: '13:00-23:59', title: 'TAM DİNLENME & SOSYAL HAYAT', description: 'Gelecek haftanın planlamasını 30dk\'da yap ve günü tamamen kendine ayır.', ap: 60, vk: 10, isCritical: false },
  ],

  // Diğer fazlar (2B, 3A, 3B, 4) için de bu mantıkla, giderek artan deneme sıklığı ve azalan konu çalışma ile doldurulabilir.
  // Örneğin 3B fazında neredeyse her gün deneme ve analiz olacaktır.

  // =========================================================================
  // FAZ 3B: ZİRVE PERFORMANS & ZİHİNSEL HAZIRLIK (1 Mayıs - Sınav)
  // AMAÇ: Sınav stratejisi, zaman yönetimi, psikolojik dayanıklılık.
  // =========================================================================
  season3b_peak_performance: [
     { id: 'p3b-tek-1', day: [1, 3, 5], time: '10:00-12:15', title: 'TYT GERÇEK ZAMANLI SİMÜLASYON', description: 'Optik form doldurarak, sınav anını birebir yaşa.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3b-tek-2', day: [1, 3, 5], time: '14:00-17:00', title: 'STRATEJİK ANALİZ (TYT)', description: 'Turlama tekniği işe yaradı mı? Zaman yönetimi nasıldı? Hatalar bilgi mi, dikkat mi?', ap: 400, vk: 45, isCritical: true },
     { id: 'p3b-cift-1', day: [2, 4], time: '10:00-13:00', title: 'AYT GERÇEK ZAMANLI SİMÜLASYON', description: 'Optik form doldurarak, sınav anını birebir yaşa.', ap: 500, vk: 60, isCritical: true },
     { id: 'p3b-cift-2', day: [2, 4], time: '15:00-18:00', title: 'BİLGİ KONTROL ANALİZİ (AYT)', description: 'Unutulan formüller, karıştırılan kavramlar üzerine yoğunlaş.', ap: 450, vk: 50, isCritical: true },
     { id: 'p3b-6-1', day: 6, time: '10:00-18:00', title: 'GENEL HATA DEFTERİ TARAMASI', description: 'Yıl boyunca tuttuğun hata defterini baştan sona oku. Tekrar eden hataları belirle.', ap: 300, vk: 30, isCritical: true },
     { id: 'p3b-0-1', day: 0, time: 'Tüm Gün', title: 'MUTLAK DİNLENME', description: 'Dersle ilgili hiçbir şey yok. Zihnini tamamen boşalt. Güvenini tazele.', ap: 100, vk: 20, isCritical: false },
  ],

  // =========================================================================
  // FAZ 4: DEĞERLENDİRME & YENİLENME
  // =========================================================================
  phase4_post_yks: [
    { id: 'p4-1', day: [0,1,2,3,4,5,6], time: 'Tüm Gün', title: 'ZİHİNSEL VE BEDENSEL RESTORASYON', description: 'Uyu, gez, oku, izle. Yılın yorgunluğunu at.', ap: 100, vk: 20, isCritical: false },
    { id: 'p4-2', day: [0,1,2,3,4,5,6], time: 'Tüm Gün', title: 'TERCİH DÖNEMİ ARAŞTIRMASI', description: 'Üniversiteleri, bölümleri, kariyer yollarını stres olmadan, keyifle araştır.', ap: 100, vk: 20, isCritical: false },
  ],
};