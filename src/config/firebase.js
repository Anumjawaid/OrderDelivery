import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDi_FYdJWjbAZI3DEuzE5qhmu601oCH2GM",
    authDomain: "orderdelivery128.firebaseapp.com",
    projectId: "orderdelivery128",
    storageBucket: "orderdelivery128.appspot.com",
    messagingSenderId: "326120149729",
    appId: "1:326120149729:web:215c9052d8aef663c19da0",
    measurementId: "G-GP5WLF7EZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase