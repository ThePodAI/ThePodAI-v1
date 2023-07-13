import { FIREBASE_AUTH } from '../../../firebase-auth';
import * as firebaseUserCreate from "firebase/auth";


const handleSignup = (email, password) => {
    firebaseUserCreate.createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential.user.email);
            console.log('User created successfully');
        })
        .catch(error => console.log(error.message))
}

const handleLogin = (email, password) => {
    firebaseUserCreate.signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged In with : ", userCredential.user.email);
            console.log('User created successfully');
        })
        .catch(error => console.log(error.message))

}


export {handleLogin, handleSignup};