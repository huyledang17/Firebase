
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDY-WEdETuto0I17fXwu9hwUoMvrowfrZ8",
  authDomain: "notereactjs-850c3.firebaseapp.com",
  databaseURL: "https://notereactjs-850c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notereactjs-850c3",
  storageBucket: "notereactjs-850c3.appspot.com",
  messagingSenderId: "488854104525",
  appId: "1:488854104525:web:0e2c1808e98597eee8fc84",
  measurementId: "G-0254YLG3Z1"
};
  // Initialize Firebase  
    
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);