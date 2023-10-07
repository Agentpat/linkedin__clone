
// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJE415Z1gVfENrtldpbxeKngpResCnDiQ",
    authDomain: "linkedin-clone-f5904.firebaseapp.com",
    projectId: "linkedin-clone-f5904",
    storageBucket: "linkedin-clone-f5904.appspot.com",
    messagingSenderId: "301815931044",
    appId: "1:301815931044:web:d81e68c988ecfaa7ea4631"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth}
