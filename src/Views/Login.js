import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <form>
        <ul>
          <li>
            <label for="name">UserName</label>
            <input type="text" id="name" name="user_name"></input>
          </li>
          <li>
            <label for="name">Password</label>
            <input type="password" id="password" name="password"></input>
          </li>

          <li>
            <Link to="/home">
              <button>Log In</button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Login;
