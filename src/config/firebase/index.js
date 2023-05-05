import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9EBnzoNvxYFKL11j3PNsvf32CnmiuwXs",
  authDomain: "zootopia-firebase.firebaseapp.com",
  projectId: "zootopia-firebase",
  storageBucket: "zootopia-firebase.appspot.com",
  messagingSenderId: "488524228176",
  appId: "1:488524228176:web:846de8ba7ddad128d59355"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
const db = getFirestore(app)
export {db}