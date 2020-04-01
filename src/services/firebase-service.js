import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyvJS2LR3vmyWog_sU_wbECvRK84kwlMU",
  authDomain: "datos-villarrica-app.firebaseapp.com",
  databaseURL: "https://datos-villarrica-app.firebaseio.com",
  projectId: "datos-villarrica-app",
  storageBucket: "datos-villarrica-app.appspot.com",
  messagingSenderId: "387113442945",
  appId: "1:387113442945:web:e51dee89d2a7e606a57780"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider()
}

export { db, auth, providers };
