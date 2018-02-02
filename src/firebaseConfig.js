import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAKRwyuayzluTZA0GbCMQ5ICJ79FsySBX0",
  authDomain: "eaze-giphy-app.firebaseapp.com",
  databaseURL: "https://eaze-giphy-app.firebaseio.com",
  projectId: "eaze-giphy-app",
  storageBucket: "eaze-giphy-app.appspot.com",
  messagingSenderId: "180106841995"
}

export const fb = firebase.initializeApp(config)
export const db = firebase.firestore()
