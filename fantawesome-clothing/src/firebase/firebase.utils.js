import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCS76C0fseq7n_JgvH77B1wqlZ3ntf2pV8",
    authDomain: "fantawesome-29cea.firebaseapp.com",
    databaseURL: "https://fantawesome-29cea.firebaseio.com",
    projectId: "fantawesome-29cea",
    storageBucket: "",
    messagingSenderId: "733509209256",
    appId: "1:733509209256:web:4d61e7f852bd0c9d87069d"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;