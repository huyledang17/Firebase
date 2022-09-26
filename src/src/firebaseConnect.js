// import firebase from "firebase/app";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC0IhveK80MTtLeavCFulAcowTm7qArOSY",
  authDomain: "tin-tuc1.firebaseapp.com",
  databaseURL: "https://tin-tuc1-default-rtdb.firebaseio.com",
  projectId: "tin-tuc1",
  storageBucket: "tin-tuc1.appspot.com",
  messagingSenderId: "84539342870",
  appId: "1:84539342870:web:6ceb1ff6a600863b69b537",
  measurementId: "G-XXY1DC0FTP"
  };
  // Initialize Firebase
  
  //firebase.analytics();
  export default firebase;

  export const firebaseConnect=firebase.initializeApp(firebaseConfig);
  
  var data=firebase.database().ref('user');
  //Truy xuất bằng snapshot
  data.once('value').then(function(snapshot){
    console.log(snapshot.val());
    })
  
 

 

