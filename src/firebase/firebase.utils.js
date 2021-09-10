import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyChNGpr34ULhea11YWA7xMoBwgBOMxcx_c",
    authDomain: "crwn-db-70724.firebaseapp.com",
    projectId: "crwn-db-70724",
    storageBucket: "crwn-db-70724.appspot.com",
    messagingSenderId: "757002580754",
    appId: "1:757002580754:web:4ea448efe02bfc10e8f9cb",
    measurementId: "G-WN2Q0V7MP7"
  };

const firebase = initializeApp(config);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export const signInWithGoogle = signInWithPopup(auth, provider);
// export const auth = getAuth();
// //export const storage= firebase.storage();

// const provider = auth
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase; 
