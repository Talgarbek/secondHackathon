import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDMDPGGSlMXY5TQ6TLDWOt6CGvDj77IqS4",
    authDomain: "secondhackathon-67eba.firebaseapp.com",
    projectId: "secondhackathon-67eba",
    storageBucket: "secondhackathon-67eba.appspot.com",
    messagingSenderId: "687424684210",
    appId: "1:687424684210:web:565697ae2b4fdb6a5249ab"
})

export const auth = app.auth()
export default app