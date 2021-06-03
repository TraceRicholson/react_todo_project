
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const app = firebase.initializeApp({
  apiKey: "AIzaSyBprxSwqar_kJT-O934XIhbg8YcQ01g5Kw",
  authDomain: "socal-golf-tour-2cf45.firebaseapp.com",
  databaseURL: "https://socal-golf-tour-2cf45-default-rtdb.firebaseio.com",
  projectId: "socal-golf-tour-2cf45",
  storageBucket: "socal-golf-tour-2cf45.appspot.com",
  messagingSenderId: "485371547044",
  appId: "1:485371547044:web:ecc692dab4ddbbf03cc531"
})

export const auth = app.auth();
export const firestore = firebase.firestore();


export default app;