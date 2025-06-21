// ARAŞTIRMA KİLOMETRETAŞLARI VERİTABANI

// Koşul fonksiyonları, UserProgressContext'ten gelen 'progress' objesini parametre olarak alır.
export const allAchievements = [
  {
    id: 'ach_ap_1',
    name: 'Veri Akışı Başladı',
    description: 'Toplam 1.000 Araştırma Puanı (AP) kazan.',
    icon: '⚡️',
    condition: (progress) => progress.ap >= 1000,
  },
  {
    id: 'ach_ap_2',
    name: 'Nöral Ağ Genişlemesi',
    description: 'Toplam 10.000 Araştırma Puanı (AP) kazan.',
    icon: '🧠',
    condition: (progress) => progress.ap >= 10000,
  },
  {
    id: 'ach_level_5',
    name: 'Kıdemli Araştırmacı',
    description: 'Yetkinlik Seviyesi 5\'e ulaş.',
    icon: '🧑‍🔬',
    condition: (progress) => progress.level >= 5,
  },
  {
    id: 'ach_protocols_25',
    name: 'Metodik Yaklaşım',
    description: 'Toplam 25 araştırma protokolünü başarıyla tamamla.',
    icon: '🧪',
    condition: (progress) => progress.completedProtocols.size >= 25,
  },
  {
    id: 'ach_protocols_100',
    name: 'Deney Virtüözü',
    description: 'Toplam 100 araştırma protokolünü başarıyla tamamla.',
    icon: '🏆',
    condition: (progress) => progress.completedProtocols.size >= 100,
  },
  {
    id: 'ach_buy_microscope',
    name: 'Mikro Evren Kaşifi',
    description: 'Laboratuvarına bir Elektron Mikroskobu ekle.',
    icon: '🔬',
    condition: (progress) => progress.purchasedItems.has('item_microscope'),
  },
  {
    id: 'ach_buy_bosphorus',
    name: 'Hedefe Odaklan',
    description: 'Sanal pencerenden Boğaziçi manzarasını izle.',
    icon: '🎓',
    condition: (progress) => progress.purchasedItems.has('item_bosphorus_view'),
  },
  {
    id: 'ach_nobel_candidate',
    name: 'Nobel Adayı',
    description: 'Toplam 100.000 Araştırma Puanı (AP) kazanarak alanında uzmanlığını kanıtla.',
    icon: '🥇',
    condition: (progress) => progress.ap >= 100000,
  },
];