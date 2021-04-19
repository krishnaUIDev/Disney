import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnhg8bl7n6GPdcFS24OlB4DGF_LIk9Y74",
  authDomain: "disney-a3086.firebaseapp.com",
  projectId: "disney-a3086",
  storageBucket: "disney-a3086.appspot.com",
  messagingSenderId: "72695527322",
  appId: "1:72695527322:web:5fc63c337bf927c3032c23",
  measurementId: "G-X6BRJKF05Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
