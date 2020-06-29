import React from 'react'
import { withRouter } from 'react-router'
import UserDetailForm from '../Components/Input'
import LBL from '../Firebase/keys'
import { addToStore } from '../Firebase/firestore'
import { signUp } from '../Firebase/auth'


const Signup = ({ history }) => {

  const onSubmit = (allObjs) => {

    const email = allObjs[LBL.Email]
    const password = allObjs[LBL.Password]
    const firstName = allObjs[LBL.First]
    const lastName = allObjs[LBL.Last]
    const age = allObjs[LBL.Age]
    const address = allObjs[LBL.Address]
    const phoneNumber = allObjs[LBL.Phone]

    const redirectToHome = () => history.push('/')

    // Upload User's Text field choices
    const uploadData = async () => {
      try {
        await addToStore({ firstName, lastName, age, address, phoneNumber })
      } catch (error) {
        alert(error)
      }
    }
    signUp(email, password)
      .then(uploadData())
      .then(redirectToHome)
    // File Upload
  }
  return (
    <div>
      <h1>Sign up</h1>
      <UserDetailForm onSubmit={onSubmit} />

    </div >
  )
}

export default withRouter(Signup)


