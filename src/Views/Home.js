import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../Firebase/auth'



function Home() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      <h1> Youre logged in.</h1>
      <p>Edit Mode {editMode ? '✅' : '🟥'}.</p>
      <p>Your Details Are:</p>
      {editMode ? <EditDetails /> : <UserDetails />}
      <button onClick={() => setEditMode(!editMode)} >Toggle Edit Mode</button>
      <br />
      <Link to="/">
        <button onClick={signOut} >Sign Out</button>
      </Link>
      <br />
    </div>
  )
}

export default Home

function UserDetails(props) {
  return (
    <React.Fragment>
      <p>TODO: DETAILS</p>
    </React.Fragment>
  )
}

function EditDetails(props) {
  return (
    <React.Fragment>
      <p>TODO: Edit</p>
    </React.Fragment>
  )
}