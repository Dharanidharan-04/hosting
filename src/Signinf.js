import React from 'react'
import {firebase} from './Firebase/firebase'
function Signinf() {



    const SigninFirebase=()=>{
        var google_provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((res)=>{
            console.log("res",res.credential)
        })
        .catch((err)=>{
              console.log(err)
        })
    }

    firebase.auth().onAuthStateChanged((user)=>{
        console.log("user ",user);
    }
    
    )
  return (
    <button onClick={SigninFirebase}> Sign In</button>
  )
}

export default Signinf