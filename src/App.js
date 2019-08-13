import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router exact={true}>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Splashdown</h1>
        <Link className="App-button" to="/generate/">
          {/* <button className="App-button"> */}
          Generate Color Scheme
        {/* </button> */}
        </Link>
      </header>
    </div>
    <Route path="/generate" exact component={generate} />
    </Router>
  );
}


function generate() {
  return <h2>Howdy</h2>
}
export default App;
