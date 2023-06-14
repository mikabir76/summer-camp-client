import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
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
},[]);
const logOut = ()=>{
    return signOut(auth)
}
    const authInfo = {
       user,
       loading,
       createUser,
       signIn,
       profileUpdate,
       googleSignIn,
       logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;