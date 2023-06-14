import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const profileUpdate = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
};
const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)
};

useEffect(()=>{
    const unsubscriber = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return ()=> unsubscriber()
},[])
    const authInfo = {
       user,
       loading,
       createUser,
       profileUpdate,
       googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;