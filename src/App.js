import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
