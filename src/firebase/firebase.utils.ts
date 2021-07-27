import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKBfWc52JmyiMWjk0XdvVQq-Cita4NJCY",
    authDomain: "mrpill-database.firebaseapp.com",
    projectId: "mrpill-database",
    storageBucket: "mrpill-database.appspot.com",
    messagingSenderId: "171822634966",
    appId: "1:171822634966:web:922d1ae0975e5ddb603677"
};

firebase.initializeApp(firebaseConfig);

interface additionalData {
    displayName?: string | null | undefined;
}

export const createUserDocument = (userAuth: firebase.User | null , additionalData: additionalData) => {
    if(userAuth) {
        console.log(additionalData);
        const date = new Date();
        const { uid, email } = userAuth;
        const displayName = additionalData?.displayName;

        firebase.firestore().collection('users').doc(uid).set({createdAt: date, email, displayName });
    }
}


const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;