import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Basic HTML Components
import Header from "./Components/Header";
// Context
import { AuthProvider } from "./Auth"
// Views
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <React.Fragment>
          <PrivateRoute path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </React.Fragment>
      </Router>
    </AuthProvider>
  );
}

export default App;
