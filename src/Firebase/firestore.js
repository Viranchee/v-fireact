import * as firebase from 'firebase'
import 'firebase/firestore'

export const addToStore = ({ firstName, lastName, age, address, phoneNumber }) => {
  const db = firebase.app().firestore()
  const collection = db.collection('users')
  const doc = collection.doc(firstName + lastName)
  return doc
    .set({ firstName, lastName, age, address, phoneNumber })
    .catch((error) => {
      console.log(error)
    })
}
