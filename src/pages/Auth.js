import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./Config"

export const doCreateUserWithEmail=async(email,pass)=>{
    return createUserWithEmailAndPassword(auth,email,pass).catch((err)=>{
        console.log(err)
    })
}

export const doSignInWithEmail=async(email,pass)=>{
    return signInWithEmailAndPassword(auth,email,pass).catch((err)=>{
        console.log(err)
    })
}

export const doSignOutWithEmail=async(email,pass)=>{
    return auth.signOut();
}