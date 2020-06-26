import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router"
import app from "../firebase"

import { AuthContext } from "../Auth"

function Login({ history }) {

  const handleLogin = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements

    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value)
      history.push("/")
    } catch (error) {
      alert(error)
    }
  }, [history])

  const { currentUser } = useContext(AuthContext)

  if (currentUser) { return <Redirect to="/" /> }

  return (
    <React.Fragment>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br />
        <label>Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br />
        <input type="checkbox" name="savePwd" id="" />
        <br />
        <input type="submit" value="Login" />
        <input type="button" value="Sign Up" onClick={() => history.push("/signup")} />
      </form>
    </React.Fragment >
  );
}

export default withRouter(Login)
