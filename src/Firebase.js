
// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkSH0o4AHG1mfNvVaQBimCCOlPgJ2Tytc",
  authDomain: "linkedin-clone-a2465.firebaseapp.com",
  projectId: "linkedin-clone-a2465",
  storageBucket: "linkedin-clone-a2465.appspot.com",
  messagingSenderId: "232049415094",
  appId: "1:232049415094:web:c4f89bd2115fcc2eec2717"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth}





