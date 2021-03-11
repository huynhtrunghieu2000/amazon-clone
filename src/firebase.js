import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDhTqtHNP216BPskDcFxWzLuUEEU2eOqEY",
  authDomain: "clone-89b1a.firebaseapp.com",
  databaseURL: "https://clone-89b1a.firebaseio.com",
  projectId: "clone-89b1a",
  storageBucket: "clone-89b1a.appspot.com",
  messagingSenderId: "971309658403",
  appId: "1:971309658403:web:a31859bc84b06c7e155c96",
  measurementId: "G-ZXWNQLD8KM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
