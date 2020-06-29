import * as firebase from 'firebase'
import 'firebase/firestore'
import app from '../firebase'

function database() {
  const db = firebase.app().firestore()
  return db.collection('users').doc(firebaseUserID())
}

function firebaseUserID() {
  let uid = app.auth().currentUser.uid
  return String(uid)
}

export const addToStore = ({ firstName, lastName, age, address, phoneNumber }) => {
  const doc = database()
  return doc
    .set({ firstName, lastName, age, address, phoneNumber })
    .catch((error) => {
      throw error
    })
}

export const updateStore = ({ firstName, lastName, age, address, phoneNumber }) => {
  const doc = database()
  return doc
    .update({ firstName, lastName, age, address, phoneNumber })
    .catch((error) => {
      throw error
    })
}
export const getFromStore = async () => {
  return database()
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data()
      } else {
        throw 'Non Existent'
      }
    })
    .catch((error) => {
      throw error
    })

}