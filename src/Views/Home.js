import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {

  let seconds = use1SecInterval()

  return (
    <div>
      <h1> You're logged in, Env Hello is: "{process.env.REACT_APP_HELLO}".</h1>
      <h2> Seconds Elapsed: {seconds}</h2>
      <IntervalCopyPaste />
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Home;


const use1SecInterval = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(num => num + 1)
    }, 1000)

    return () => { clearInterval(interval) }
  }, [])

  return seconds
}

const IntervalCopyPaste = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let content = null // Since 1 conditional, this could be replaced by Conditional JSX Syntax `{ seconds > 10 && <h1>CONTINUE JSX</h1>}`
  if (seconds > 2) {
    content = (
      <div className="App">
        <header className="App-header">
          {seconds} seconds have elapsed since mounting.
      </header>
      </div>
    )
  }
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}