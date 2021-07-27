import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth, createUserDocument, passwordResetEmail } from '../firebase/firebase.utils';

interface CurrentUser {
  id: string | undefined;
  displayName?: string | null | undefined;
  email: string | null | undefined;
}

interface AuthInterface {
  currentUser: CurrentUser | null;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<Object>;
  resetPassword: (email: string) => Promise <void>;
}

export const AuthContext = createContext<AuthInterface | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const signUp = (email: string, password: string, displayName: string) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) =>
        createUserDocument(userAuth.user, { displayName: displayName })
      )
      .catch((error) => console.log(error));

  const signIn = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

  const resetPassword = (email: string) => passwordResetEmail(email);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const id = user?.uid;
      const email = user?.email;
      const displayName = user?.displayName;

      setCurrentUser({ id, displayName, email });
    });

    return unsubscribe;
  }, []);

  const value: AuthInterface = {
    currentUser,
    signUp,
    signIn,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
