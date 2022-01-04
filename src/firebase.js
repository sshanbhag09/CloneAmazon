import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsYLkf2yRJh3Nu5tq4sXBSiZpZMTLkoJA",
  authDomain: "proj-9fb9b.firebaseapp.com",
  projectId: "proj-9fb9b",
  storageBucket: "proj-9fb9b.appspot.com",
  messagingSenderId: "529482670754",
  appId: "1:529482670754:web:da05ef73a3e0b0f49d6dfb",
  measurementId: "G-H99BLTF3XT"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};