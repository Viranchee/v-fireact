import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../Firebase/auth'



function Home(props) {
  return (
    <div>
      <h1> Youre logged in".</h1>
      <Link to="/">
        <button onClick={signOut} >Sign Out</button>
      </Link>
      <br />
    </div>
  )
}

export default Home
