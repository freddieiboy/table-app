import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAuP4w2n5POaenbiwFQNGfB3otBDoVAsqA",
  authDomain: "table-app-5ff92.firebaseapp.com",
  databaseURL: "https://table-app-5ff92.firebaseio.com",
  storageBucket: "table-app-5ff92.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);
export const Firebase = firebaseApp;
export const FirebaseDb = firebaseApp.database();
