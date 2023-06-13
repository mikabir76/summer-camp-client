import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const auth = getAuth(app)

const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const profileUpdate = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}
    const authInfo = {
       user,
       createUser,
       profileUpdate

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;