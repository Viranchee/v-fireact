import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from '../firebase'
import 'firebase/firestore'
import UserDetailForm from '../Components/Input'
import LBL from '../Firebase/keys'


const Signup = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    // Verify form

    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }, [history])


  const onSubmit = (allObjs) => {

    const email = allObjs[LBL.Email]
    const password = allObjs[LBL.Password]

    const redirectToHome = () => history.push('/')

    // Send Creds to  
    const signUp = async () => {
      try {
        console.log('Starting to call api')
        await app
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(console.log('USER CREATED'))
        // return Promise.all()
      } catch (error) {
        console.log(error)
        alert(error)
        return Promise.reject()
      }
    }

    // Upload User's Text field choices
    const uploadData = async () => {
      try {
        const db = app.firestore()
        const data = db.collection('users')

        await data.set({
          firstName: allObjs[LBL.First],
          lastName: allObjs[LBL.Last],
          age: allObjs[LBL.Age],
          address: allObjs[LBL.Address],
          phone: allObjs[LBL.Phone]
        }).then(console.log('DATA LBL.Profile'))
      } catch (error) {
        alert(error)
        return Promise.reject()
      }
    }

    signUp()
      .then(uploadData())
      .then(console.log('YO!!! We Uploaded Text Fields'))
      .then(redirectToHome)

    // Register the user first

    // Then upload data

    // Then upload image



    // const storageRef = app.storage().ref()
    // const fileRef = storageRef.child(data.picture[0].name)
    // fileRef.put(data.picture[0]).then(() => {
    //   console.log("Uploaded a file")
    // })

  }
  return (
    <div>
      <h1>Sign up</h1>
      <UserDetailForm onSubmit={onSubmit} />

    </div >
  )
}

export default withRouter(Signup)


