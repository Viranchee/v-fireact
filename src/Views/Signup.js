import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h1>This is Sign up page</h1>
      <br />
      <form>
        <Link to="/">
          <button>Sign Up!</button>
        </Link>
      </form>
    </div>
  );
}
