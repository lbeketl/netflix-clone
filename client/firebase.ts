
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBTIUDzmZinhrSrGWqdrN7jS2QBBfAt19s',
    authDomain: 'netflix-clone-856dc.firebaseapp.com',
    projectId: 'netflix-clone-856dc',
    storageBucket: 'netflix-clone-856dc.appspot.com',
    messagingSenderId: '835378220947',
    appId: '1:835378220947:web:8e10eeb491e7e4e905e266',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
