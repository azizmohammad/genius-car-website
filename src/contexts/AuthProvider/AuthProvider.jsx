import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user singup
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email password login
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // on auth state Chante
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser);
        });
        return () => {
            return unsubscribe()
        }
    }, [])



    const authinfo = {
        user, loading, createUser, singIn,

    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;