import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2z5tk4N1Sh4kAaHDIvutgY6_5Y4-gSaE",
  authDomain: "gdocs-92c9a.firebaseapp.com",
  projectId: "gdocs-92c9a",
  storageBucket: "gdocs-92c9a.appspot.com",
  messagingSenderId: "1053917138010",
  appId: "1:1053917138010:web:6f96506ddf2260076b1c63"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
