import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../Firebase/auth'
import { getFromStore, addToStore } from '../Firebase/firestore'

function logHomeData(data) {
  console.log(data)
}


function Home() {
  const [editMode, setEditMode] = useState(false)
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

  return (
    <div>
      <h1> Youre logged in.</h1>
      <p>Edit Mode {editMode ? '✅' : '🟥'}.</p>
      <p>Your Details Are:</p>
      {editMode ? <EditDetails userData={userResult} /> : <UserDetails userData={userResult} />}
      <button onClick={() => setEditMode(!editMode)} >Toggle Edit Mode</button>
      <br />
      <Link to="/">
        <button onClick={signOut} >Sign Out</button>
      </Link>
      <br />
      <button onClick={() => addToStore({ firstName: 'Hi', lastName: 'Hi', age: 44, address: 'Hi', phoneNumber: 9900 })}>Send Fake Data</button>
      <br />
    </div>
  )
}

export default Home

function UserDetails(props) {
  logHomeData(props)
  return (
    <React.Fragment>
      <p>TODO: DETAILS</p>
    </React.Fragment>
  )
}

function EditDetails(props) {
  logHomeData(props)

  return (
    <React.Fragment>
      <p>TODO: Edit</p>
    </React.Fragment>
  )
}