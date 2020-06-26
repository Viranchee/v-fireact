import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router"
import { AuthContext } from "../Auth"
import { signIn } from "../Firebase/auth";

function Login({ history }) {

  const handleLogin = useCallback(async event => {
    const { email, password } = event.target.elements

    console.log(email, password);
    await signIn(email.value, password.value)
      .then(() => alert("Success"))
      .then(() => history.push('/'))
      .catch((error) => alert(error))

  })

  // const handleLogin1 = useCallback(async event => {
  //   event.preventDefault()
  //   const { email, password } = event.target.elements

  //   try {
  //     await app.auth().signInWithEmailAndPassword(email.value, password.value)
  //     history.push("/")
  //   } catch (error) {
  //     alert(error)
  //   }
  // }, [history])

  const { currentUser } = useContext(AuthContext)

  if (currentUser) { return <Redirect to="/" /> }

  return (
    <React.Fragment>
      <h5>Hey, please DO NOT use your real Email address and Password.</h5>
      <h6>Since these email password aren't verified, use throwaway data here</h6>
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
        <label > Save Password</label>
        <br />
        <input type="submit" value="Login" />
        <input type="button" value="Sign Up" onClick={() => history.push("/signup")} />
      </form>
    </React.Fragment >
  );
}

export default withRouter(Login)
