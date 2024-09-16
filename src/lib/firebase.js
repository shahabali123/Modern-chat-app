import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "modern-chat-app-5352b.firebaseapp.com",
    projectId: "modern-chat-app-5352b",
    storageBucket: "modern-chat-app-5352b.appspot.com",
    messagingSenderId: "657484375192",
    appId: "1:657484375192:web:4619e5ad29cc9abb321ced",
    measurementId: "G-MKLW2ST8CV"
};

const app = initializeApp(firebaseConfig);


export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)