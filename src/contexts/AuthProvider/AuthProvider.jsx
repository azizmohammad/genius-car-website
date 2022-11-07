import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // gogle login
    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // github login
    const githubLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // facebook Login
    const facebookLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    // create user singup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email password login
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // email Verifiy
    const emailVerifiy = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }
    // user updated
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }
    // logout
    const lotOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // on auth state Chante
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // console.log(currentUser);
        });
        return () => {
            return unsubscribe()
        }
    }, [])



    const authinfo = {
        user, loading, createUser, singIn,
        googleLogin, githubLogin, facebookLogin,
        emailVerifiy, updateUserProfile, lotOut
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;