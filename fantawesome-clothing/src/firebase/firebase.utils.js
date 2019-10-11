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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) 
      return null

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (err) {
        console.log('error creating user');
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;