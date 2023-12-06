// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import  firebase  from "firebase/compat/app";
import 'firebase/compat/database';
import { getFirestore, doc, setDoc,getDoc } from "firebase/firestore"; // Import getFirestore from firestore module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4yRCCDHQLQ3XC5QXEuDGW2fh1SM4xRuE",
  authDomain: "newspaper-7e4b5.firebaseapp.com",
  projectId: "newspaper-7e4b5",
  storageBucket: "newspaper-7e4b5.appspot.com",
  messagingSenderId: "679687881392",
  appId: "1:679687881392:web:9893f9ef35d8a48d1e7175"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Corrected line

const createUserDocument = async(user,additionalData)=>{
  console.log("check 0");
  // console.log(!user);
  if(!user) return;
  const userRef =doc(firestore,`users/${user.uid}`);
  const snapshot = await getDoc(userRef);
  console.log("check 01");
  console.log(snapshot);
  console.log(!snapshot.exists);
  if(snapshot.exists){
    const {email} = user;
    const {displayName} = additionalData;
    console.log("check 1");
    try{
     await setDoc(userRef,{
        displayName,
        email,
        createdAt: new Date()
      })
      console.log("check 2");
    }catch(e){
      console.log(e);
    }
  }
}

export {app,createUserDocument};