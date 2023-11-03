import React, { createContext } from 'react'
import app from '../../Firebase.config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext(null) 
const auth = getAuth(app)
const AuthProvider = ({children}) => {

const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}


const user ={
    registerUser
}
  return (
    <authContext.Provider value={user}>
    {children}
    </authContext.Provider>
  )
}

export default AuthProvider
