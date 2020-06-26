import React from "react";
import { Link } from "react-router-dom";
import app from '../firebase'


function Home(props) {
  return (
    <div>
      <h1> You're logged in, Env Hello is: "{process.env.REACT_APP_HELLO}".</h1>
      <Link to="/">
        <button onClick={() => app.auth().signOut()} >Logout</button>
      </Link>
      <br />
      <PingFirebase />

    </div>
  );
}

export default Home;

const PingFirebase = () => {


  // function addToStore() {
  //   const obj = {}
  //   obj[LBL.First] = "test"
  //   obj[LBL.Last] = "test"
  //   obj[LBL.Age] = 5
  //   obj[LBL.Address] = "test"
  //   obj[LBL.Phone] = 9211

  //   addToStore(obj)

  // }

  // function contactFirebase() {
  //   // useAddProfilePicture()
  // }


  return (
    <React.Fragment>
      <br />
      <form >
        <button type="submit">Upload</button>
      </form>
    </React.Fragment>
  )
}