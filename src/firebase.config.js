import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDi0UyEMndyNM5rqlqx1D3J1d9suvonWyk",
    authDomain: "weeded-76135.firebaseapp.com",
    databaseURL: "https://weeded-76135-default-rtdb.firebaseio.com",
    projectId: "weeded-76135",
    storageBucket: "weeded-76135.appspot.com",
    messagingSenderId: "737250548109",
    appId: "1:737250548109:web:eaf7ca725663397e0485c4",
    measurementId: "G-4NH4W7CG33"
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage }