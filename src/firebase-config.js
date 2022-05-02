import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAB2bqMJDJ-uQEa3KdvRp2m0P3UTHCL4vI",
  authDomain: "digital-business-card-builder.firebaseapp.com",
  projectId: "digital-business-card-builder",
  storageBucket: "digital-business-card-builder.appspot.com",
  messagingSenderId: "1081163656584",
  appId: "1:1081163656584:web:86ddce02cfd045b25bde3d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
