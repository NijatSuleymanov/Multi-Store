import firebase from "firebase/app";
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyBfNsd71siBVs8y5oq3CZCMqs4C8stAD5A",
    authDomain: "multi-store-17b29.firebaseapp.com",
    databaseURL: "https://multi-store-17b29-default-rtdb.firebaseio.com",
    projectId: "multi-store-17b29",
    storageBucket: "multi-store-17b29.appspot.com",
    messagingSenderId: "605121599047",
    appId: "1:605121599047:web:7baa3d3f022fb153804362"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()
  export {database as default}