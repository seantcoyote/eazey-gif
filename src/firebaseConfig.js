import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAcaNiQTc_9FoVGCJyK0KMc6-DcaTsO1Pk",
  authDomain: "eazey-gif.firebaseapp.com",
  databaseURL: "https://eazey-gif.firebaseio.com",
  projectId: "eazey-gif",
  storageBucket: "eazey-gif.appspot.com",
  messagingSenderId: "1050567859956"
}

export const fb = firebase.initializeApp(config)
export const db = firebase.firestore()
