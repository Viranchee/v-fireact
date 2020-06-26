import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [name, setname] = useState("")

  function handleSubmit(event) {
    alert("You Logged In")
  }

  function handleChange(event) {
    setname(event.target.value)
  }

  return (
    <React.Fragment>
      <h2>Hey, let's get you logged in</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
        />

        <br />
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          name="pwd"
          id=""
        />
        <br />
        <input type="checkbox" name="savePwd" id="" />
        <label htmlFor="savePwd"> Save Password </label>

        <br />
        <input type="submit" value="Login" />

        <Link to="/signup">
          <input type="button" value="Sign Up" />
        </Link>



      </form>
    </React.Fragment>
  );
}



export default Login;
