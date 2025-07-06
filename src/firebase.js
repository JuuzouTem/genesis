import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // Analytics için içe aktarma

// .env.local dosyasından çevre değişkenlerini okuyoruz
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID 
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Gerekli servisleri başlat ve dışa aktar
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app); // Analytics servisi burada SADECE BİR KERE tanımlanıyor

// İsteğe bağlı olarak app'in kendisini de dışa aktarabilirsin
export default app;