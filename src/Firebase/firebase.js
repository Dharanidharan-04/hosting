import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyBcT2DXcr0BRz6IstnRtggg6KHRlMC3uHc",
  
    authDomain: "seraphic-gizmo-350008.firebaseapp.com",
  
    databaseURL: "https://seraphic-gizmo-350008-default-rtdb.firebaseio.com",
  
    projectId: "seraphic-gizmo-350008",
  
    storageBucket: "seraphic-gizmo-350008.appspot.com",
  
    messagingSenderId: "33966935365",
  
    appId: "1:33966935365:web:209b701f82c41c1e31822c",
  
    measurementId: "G-748L6H2PNE"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  export {firebase}