import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr2bgsYdx-iw-Gw3M56tbEmT2QFYoz_BM",
  authDomain: "facebook-clone-react-js.firebaseapp.com",
  databaseURL: "https://facebook-clone-react-js.firebaseio.com",
  projectId: "facebook-clone-react-js",
  storageBucket: "facebook-clone-react-js.appspot.com",
  messagingSenderId: "730661703688",
  appId: "1:730661703688:web:0f9fee805497b8c82a81bd",
  measurementId: "G-JR3XV12MTJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
