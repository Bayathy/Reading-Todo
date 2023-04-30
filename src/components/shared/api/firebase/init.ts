import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBeAY0yE-eTlWIQY58qNzyFgeVtp-89Yqw',
  authDomain: 'reading-app-382415.firebaseapp.com',
  projectId: 'reading-app-382415',
  storageBucket: 'reading-app-382415.appspot.com',
  messagingSenderId: '1032780583953',
  appId: '1:1032780583953:web:b40b2582c3f4bd505f8db0',
  measurementId: 'G-3ZYZ4L4Q8W',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
