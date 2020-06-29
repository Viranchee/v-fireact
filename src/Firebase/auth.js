import * as firebase from 'firebase'
import 'firebase/firestore'
import app from '../firebase'

// Want to make the below functions return to their Callers. Hooks will solve this. Let the functionality stay broken

export function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function signOut() {
  return app.auth().signOut()
}