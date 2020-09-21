import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMAGnyv-WkiSGLZvWiM5J1nVEwzKOWRP0",
    authDomain: "whatsapp-clone-b94c7.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b94c7.firebaseio.com",
    projectId: "whatsapp-clone-b94c7",
    storageBucket: "whatsapp-clone-b94c7.appspot.com",
    messagingSenderId: "631038255204",
    appId: "1:631038255204:web:bd0f81606327bede9a7f71",
    measurementId: "G-9D0S361SZG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;