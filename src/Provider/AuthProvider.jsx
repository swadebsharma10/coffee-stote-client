import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);


      const signUpUser = (email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }
      const signInUser = (email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }


      const authInfo ={
            user,
            loading,
            signInUser,
            signUpUser,

      }

      return (
            <AuthContext.Provider value={authInfo}>
                 {children} 
            </AuthContext.Provider>
      );
};

export default AuthProvider;