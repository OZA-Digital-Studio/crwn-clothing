import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdqT3pcDb3nC8JAdd-aEFp1Obzx6N338g",
  authDomain: "crwn-db-89ab5.firebaseapp.com",
  projectId: "crwn-db-89ab5",
  storageBucket: "crwn-db-89ab5.appspot.com",
  messagingSenderId: "134766998059",
  appId: "1:134766998059:web:90ee6c2ab4cbfab845b06e",
  measurementId: "G-H99F5KG2P3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
