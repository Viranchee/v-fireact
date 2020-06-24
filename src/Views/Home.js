import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
      <h1> You're logged in</h1>
      <Link to="/">
        <button>
          Logout
        </button>
      </Link>
    </div>
  )
}


export default Home

