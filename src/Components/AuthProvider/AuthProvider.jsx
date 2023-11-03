import React, { createContext, useEffect, useState } from 'react'
import app from '../../Firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext(null) 
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    // create user
const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
//login user
const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

//update user profile
const updateUserProfile = (user, name, photoUrl) =>{
    return updateProfile(user, {
        displayName: name,
        photoURL: photoUrl
    })
}
// User data 
const [userData, setUserData] = useState(null)
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUserData(currentUser)
    })
    return()=>{
        unSubscribe();  
    } 
},[])


const user ={
    registerUser,
    loginUser,
    updateUserProfile,
    userData
}
  return (
    <authContext.Provider value={user}>
    {children}
    </authContext.Provider>
  )
}

export default AuthProvider
