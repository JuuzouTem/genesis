// PROTOKOL VERİTABANI TAM SÜRÜM
// day: 1 = Pazartesi, ..., 7 = Pazar
// ap: Araştırma Puanı (Zorluk/Süre), vk: Veri Kredisi (Kaynak Değeri)

export const protocols = {
  season1: [ // YAZ DÖNEMİ (YKS + İngilizce)
    { id: 's1-1-1', day: 1, time: '08:00-11:00', title: 'AYT MATEMATİK: Derinlemesine Analiz', ap: 250, vk: 35 },
    { id: 's1-1-2', day: 1, time: '11:15-13:15', title: 'TYT MATEMATİK: Branş Simülasyonu', ap: 180, vk: 25 },
    { id: 's1-2-1', day: 2, time: '08:00-11:00', title: 'AYT FİZİK: Derinlemesine Analiz', ap: 250, vk: 35 },
    { id: 's1-2-2', day: 2, time: '11:15-13:15', title: 'TYT FEN: Branş Simülasyonu', ap: 180, vk: 25 },
    { id: 's1-3-1', day: 3, time: '08:00-11:00', title: 'AYT MATEMATİK: Derinlemesine Analiz', ap: 250, vk: 35 },
    { id: 's1-3-2', day: 3, time: '11:15-13:15', title: 'TYT MATEMATİK: Branş Simülasyonu', ap: 180, vk: 25 },
    { id: 's1-4-1', day: 4, time: '08:00-11:00', title: 'AYT KİMYA: Derinlemesine Analiz', ap: 250, vk: 35 },
    { id: 's1-4-2', day: 4, time: '11:15-13:15', title: 'TYT FEN: Branş Simülasyonu', ap: 180, vk: 25 },
    { id: 's1-5-1', day: 5, time: '08:00-11:00', title: 'AYT BİYOLOJİ: Derinlemesine Analiz', ap: 250, vk: 35 },
    { id: 's1-5-2', day: 5, time: '11:15-13:15', title: 'TYT TÜRKÇE & SOSYAL: Simülasyon', ap: 200, vk: 30 },
    { id: 's1-6-1', day: 6, time: '08:00-11:00', title: 'AYT GENEL SİMÜLASYON', ap: 400, vk: 50 },
    { id: 's1-6-2', day: 6, time: '14:30-17:30', title: 'DENEME MİKRO ANALİZ (AYT)', ap: 350, vk: 45 },
    { id: 's1-0-1', day: 0, time: '08:00-11:00', title: 'TYT GENEL SİMÜLASYON', ap: 350, vk: 45 },
    { id: 's1-0-2', day: 0, time: '14:30-17:30', title: 'DENEME MİKRO ANALİZ (TYT)', ap: 300, vk: 40 },
  ],
  season2: [ // OKUL DÖNEMİ
    { id: 's2-1-1', day: 1, time: '16:45-18:15', title: 'AYT MAT: Konu Pekiştirme', ap: 200, vk: 30 },
    { id: 's2-2-1', day: 2, time: '16:45-18:15', title: 'AYT FİZİK: Konu Pekiştirme', ap: 200, vk: 30 },
    { id: 's2-3-1', day: 3, time: '16:45-18:15', title: 'AYT MAT: Konu Pekiştirme', ap: 200, vk: 30 },
    { id: 's2-4-1', day: 4, time: '16:45-18:15', title: 'AYT KİMYA: Konu Pekiştirme', ap: 200, vk: 30 },
    { id: 's2-5-1', day: 5, time: '16:45-18:15', title: 'AYT BİYO: Konu Pekiştirme', ap: 200, vk: 30 },
  ],
  season3: [ // YKS KAMPI
    { id: 's3-tek-1', day: [1, 3, 5], time: '09:45-12:30', title: 'TYT GENEL SİMÜLASYON', ap: 350, vk: 45 },
    { id: 's3-tek-2', day: [1, 3, 5], time: '13:30-16:30', title: 'TYT SİMÜLASYON ANALİZİ', ap: 300, vk: 40 },
    { id: 's3-cift-1', day: [2, 4, 6], time: '09:45-12:30', title: 'AYT GENEL SİMÜLASYON', ap: 400, vk: 50 },
    { id: 's3-cift-2', day: [2, 4, 6], time: '13:30-16:30', title: 'AYT SİMÜLASYON ANALİZİ', ap: 350, vk: 45 },
    { id: 's3-0-1', day: 0, time: 'Tüm gün', title: 'AKTİF DİNLENME', ap: 50, vk: 10 },
  ],
  season4: [ // YKS SONRASI
    { id: 's4-1', day: [1, 2, 3, 4, 5, 6, 7], time: 'Herhangi', title: 'BİR KİTAP OKU', description: 'Akademik olmayan, keyif aldığın bir kitaba başla veya bitir.', ap: 50, vk: 10 },
    { id: 's4-2', day: [1, 2, 3, 4, 5, 6, 7], time: 'Herhangi', title: 'YENİ BİR FİLM/DİZİ KEŞFET', description: 'Uzun zamandır izlemek istediğin o yapıma bir şans ver.', ap: 50, vk: 10 },
    { id: 's4-3', day: [1, 2, 3, 4, 5, 6, 7], time: 'Herhangi', title: 'SOSYAL ETKİLEŞİM', description: 'Arkadaşlarınla veya ailenle kaliteli vakit geçir.', ap: 75, vk: 15 },
  ]
};