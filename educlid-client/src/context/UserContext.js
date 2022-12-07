import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);


   const emailPassSignUp = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };
   const githubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };
   const emailPassLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };
   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false)
         console.log(currentUser);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   // const user = {displaName: "Nahid"}
   const authInfor = { user, loading, emailPassSignUp, googleSignIn, githubSignIn, logOut, emailPassLogin };

   return (
      <AuthContext.Provider value={authInfor}>{children}</AuthContext.Provider>
   );
};

export default UserContext;
