import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDlLgBzGIuE6UFKbRTrjetoL0xs0hlW6LM",
  authDomain: "food-delivery-c504a.firebaseapp.com",
  databaseURL: "https://food-delivery-c504a-default-rtdb.firebaseio.com",
  projectId: "food-delivery-c504a",
  storageBucket: "food-delivery-c504a.appspot.com",
  messagingSenderId: "979506185030",
  appId: "1:979506185030:web:e9a1548be73de801df1b47"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};