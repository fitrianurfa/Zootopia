import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC2eK2Ly9xmVojNaETt3zqShjEtzexcns",
  authDomain: "animals-a0994.firebaseapp.com",
  projectId: "animals-a0994",
  storageBucket: "animals-a0994.appspot.com",
  messagingSenderId: "810524722474",
  appId: "1:810524722474:web:fd96ab262fd50859618a53",
  measurementId: "G-1RWW04574V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const auth= getAuth(app);
export default firebaseConfig;
