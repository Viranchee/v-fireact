import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../Firebase/auth'
import { getFromStore, updateStore } from '../Firebase/firestore'
import { EditablePrefilledUserDetailForm } from '../Components/Input'
import LBL from '../Firebase/keys'

function Home() {
  const [userResult, setUserResult] = useState({
    loading: false,
    data: null,
    error: false
  })

  useEffect(() => {
    setUserResult({
      loading: true,
      data: null,
      error: false
    })
    getFromStore()
      .then((dbData) => {
        setUserResult({
          loading: false,
          data: dbData,
          error: false
        })
      })
      .catch((error) => {
        setUserResult({
          loading: false,
          data: null,
          error: error
        })
      })
  }, [])

  const onSubmit = (allObjs) => {
    console.log(allObjs)
    const firstName = allObjs[LBL.First]
    const lastName = allObjs[LBL.Last]
    const age = allObjs[LBL.Age]
    const address = allObjs[LBL.Address]
    const phoneNumber = allObjs[LBL.Phone]

    updateStore({ firstName, lastName, age, address, phoneNumber })
      // .then(alert('Updated'))
      .then(() => window.location.reload())
      .catch((error) => alert(error))
  }

  return (
    <div>
      <h1> Youre logged in.</h1>
      <p>Your Details Are:</p>
      <EditablePrefilledUserDetailForm userData={userResult.data} onSubmit={onSubmit} />
      <br />
      <Link to="/">
        <button onClick={signOut} >Sign Out</button>
      </Link>
    </div>
  )
}

export default Home
