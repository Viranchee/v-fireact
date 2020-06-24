import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <h1>This is Sign up page</h1>
      <br/>
      <Link to="/home">
        <button>
          Signup success
        </button>
      </Link>
      <Link to="/">
        <button>
          Go Back
        </button>
      </Link>
    </div>
  )
}
