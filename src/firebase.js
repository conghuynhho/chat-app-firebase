import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBlaZgeDnevK59FsUeG6dk-P-NPLlV5jBk",
  authDomain: "chatapp-ab36b.firebaseapp.com",
  databaseURL: "https://chatapp-ab36b-default-rtdb.firebaseio.com",
  projectId: "chatapp-ab36b",
  storageBucket: "chatapp-ab36b.appspot.com",
  messagingSenderId: "1059890266089",
  appId: "1:1059890266089:web:64363968c33a6d7ba65578"
}

export const auth = firebase.initializeApp(firebaseConfig).auth()