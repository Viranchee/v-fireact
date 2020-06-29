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

    signUp(email, password)
      .then((creds) => console.log(creds))
      .then(() => addToStore({ firstName, lastName, age, address, phoneNumber }))
      .then(redirectToHome)
      .catch((error) => alert(error))
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


