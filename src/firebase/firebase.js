import { initializeApp, firestore } from "firebase/app";
import 'firebase/firestore'

const app = initializeApp({
    apiKey: "AIzaSyClaA5YirDAwPhAErTlTrP90Cb9m42vkRY",
    authDomain: "proyectofinal-d268c.firebaseapp.com",
    projectId: "proyectofinal-d268c",
    storageBucket: "proyectofinal-d268c.appspot.com",
    messagingSenderId: "583781354362",
    appId: "1:583781354362:web:c5b8d7cf87d57392a2a4c3"
  });

export function getFirebaseApp() {
    return app
}

export function getFirestore() {
    return firestore(app)
}