// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcA6QipAULlkP4D971Fhre3XGAhEkFQiw',
  authDomain: 'miniblog-a949a.firebaseapp.com',
  projectId: 'miniblog-a949a',
  storageBucket: 'miniblog-a949a.appspot.com',
  messagingSenderId: '592495972630',
  appId: '1:592495972630:web:8bc9959a9fff3d7f038037',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
