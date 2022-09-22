import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const style = {
    wrapper: `flex justify-center`
}

function Signin() {
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth , provider)
    }

  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default Signin