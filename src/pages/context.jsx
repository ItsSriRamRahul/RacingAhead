import { initializeAuth, onAuthStateChanged } from "firebase/auth"
import { useContext, useEffect, useState } from "react"
import { auth } from "./Config"
import React from "react"
const Authcontext=React.createContext()

export function useAuth(){
    return useContext(Authcontext)
}

export function AuthProvider({children}){
    const [user,setUser]=useState()
    const [logged,setLogged]=useState(false)
    const[loading ,setloading]=useState(true)

    useEffect(()=>{

        const unsub =onAuthStateChanged(auth,initializeUser)
        return unsub
    },[])


    async function initializeUser(user) {
        if (user){
            setUser({...user})
            setLogged(true)
        }
        else{
            setUser(null)
            setLogged(false)
        }
        setloading(false)
    }
    const value={
        user,
        logged,
        loading
    }
}