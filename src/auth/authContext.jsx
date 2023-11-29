import React, {useState, useEffect} from "react";
import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";

export const authContext = createContext()

export const useAuth = () =>{
    const context = useContext(authContext)
    if(!context){
        console.log("error creating auth context");
    }
    return context; 
}

export function AuthProvider({children}){
const [user, setUser] = useState(""); 
useEffect(() =>{
    const susciribed = onAuthStateChanged(auth, (currentUser) => {
        if(!currentUser){
            console.log("No hay usuario");
            setUser("")
        }else{
            setUser(currentUser)
        }
    });
    return () => susciribed()
}, [])

    const register = async(email, password) =>{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
    }

 const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password); 
    console.log(response);
}

const loginWithGoogle = async() =>{
    const responseGoogle = new GoogleAuthProvider(); 
    return await signInWithPopup(auth, responseGoogle)
}

const logout = async () =>{
    const response = await signOut(auth)
    console.log(response);
}

    return <authContext.Provider
                value={{
                    register,
                    login,
                    loginWithGoogle,
                    logout,
                    user
                }}>
                {children}
            </authContext.Provider>;
}