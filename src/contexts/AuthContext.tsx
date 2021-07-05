import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../firebase/firebase.utils';

interface CurrentUser {
    id: string | undefined;
    displayName?: string | null | undefined;
    email: string | null | undefined;
}

interface AuthInterface {
  currentUser: CurrentUser | null;
  signUp: (email: string, password: string) => Promise<Object>;
  signIn: (email: string, password: string) => Promise<Object>;
}

export const AuthContext = createContext<AuthInterface | null>(null);

export const useAuth = () => useContext(AuthContext);


export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const signUp = (email:string, password:string) =>
    auth.createUserWithEmailAndPassword(email, password);

  const signIn = (email:string, password:string) =>
    auth.signInWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        const id = user?.uid;
        const email = user?.email;
        const displayName = user?.displayName;

      setCurrentUser({ id, displayName, email });

    });

    return unsubscribe;
  },[]);

  const value: AuthInterface = {
    currentUser,
    signUp,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
