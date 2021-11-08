import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4VsqYAcanXGRpSPN0q4u_wbtW7zJbPxs",
  authDomain: "docs-f72b8.firebaseapp.com",
  projectId: "docs-f72b8",
  storageBucket: "docs-f72b8.appspot.com",
  messagingSenderId: "852316554793",
  appId: "1:852316554793:web:b543d4cfe1fd69ce943e38"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
