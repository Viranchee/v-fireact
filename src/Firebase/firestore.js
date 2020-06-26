import * as firebase from 'firebase'
import 'firebase/firestore'
import { useState, useEffect } from "react";

export const addToStore = ({ firstName, lastName, age, address, phoneNumber }) => {
  const db = firebase.app().firestore()
  const collection = db.collection('users')
  const doc = collection.doc('v1')
  doc.set({
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
    phoneNumber: phoneNumber,
  })
    .then(() => { console.log("v1 object written") })
    .catch((error) => { console.log(error) })

  console.log(collection)

}

// This file not working
export const useAddProfilePicture = (imageFile) => {

  const [file, setFile] = useState(imageFile)

  useEffect(() => {
    const storageRef = firebase.app().storage().ref()
    storageRef.put(file)
      .then(() => { console.log("Uploaded") })
      .catch((error) => { console.log(error) })

    return () => { }
  }, [file])
}

export const updateStore = () => {

}

