import React from 'react'
import { Link } from 'react-router-dom'
import app from '../firebase'


function Home(props) {
  return (
    <div>
      <h1> Youre logged in".</h1>
      <Link to="/">
        <button onClick={() => app.auth().signOut()} >Logout</button>
      </Link>
      <br />
    </div>
  )
}

export default Home
