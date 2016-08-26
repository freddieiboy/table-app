import firebase from 'firebase';

/*
  Firebase configs that are pushed down to the rest of the app.
  import FirebaseDb everywhere else and use .ref() to initialize it.
*/

const config = {
  apiKey: "AIzaSyAuP4w2n5POaenbiwFQNGfB3otBDoVAsqA",
  authDomain: "table-app-5ff92.firebaseapp.com",
  databaseURL: "https://table-app-5ff92.firebaseio.com",
  storageBucket: "table-app-5ff92.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);
export const Firebase = firebaseApp;
export const FirebaseDb = firebaseApp.database();
