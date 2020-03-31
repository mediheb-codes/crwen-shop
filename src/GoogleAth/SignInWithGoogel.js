import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDwZ-eAPnGg4_LCaXDRPYW8-12wZ6Fzdms",
    authDomain: "first-shop-5aecd.firebaseapp.com",
    databaseURL: "https://first-shop-5aecd.firebaseio.com",
    projectId: "first-shop-5aecd",
    storageBucket: "first-shop-5aecd.appspot.com",
    messagingSenderId: "658771015907",
    appId: "1:658771015907:web:f6e74b737564483c02add6",
    measurementId: "G-LF0LYPBXB5"
};

export const createUserProfil = async (userAuth , addititionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const SnapShot = await userRef.get();
        if(!SnapShot.exists){
            const {displayName , email} = userAuth;
            const createrAuth = new Date();
        try{
            await userRef.set({
                displayName , email , createrAuth , ...addititionalData
            })
        }catch (error){
            console.log('eror User' , error.message)
            
        }
    }
    return userRef;
        }


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

