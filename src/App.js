import React, { Component } from 'react';
import logo from './logo.svg';
import { ScrollTo } from "react-scroll-to";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//My Components
import Welcome from './components/welcome'
import Colors from './components/colors'

class App extends Component {
  render() {
    return (
      // <Router>
      // <div className="App">
      //   <header className="App-header">
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <h1>Splashdown</h1>
      //     <Link className="App-button" to="/generate/">
      //       {/* <button className="App-button"> */}
      //       Generate Color Scheme
      //     {/* </button> */}
      //     </Link>
      //   </header>
      // </div>
      // <Route path="/generate" exact component={generate} />
      // <generate />
      // </Router>
      <div>
        <Welcome></Welcome>
        <Colors></Colors>
      </div>
      
    );
  }

}

function generate() {
  return (
   
  //  <ScrollTo>
  //   {({ scrollTo }) => (
  //     <a onClick={() => scrollTo({ x: 0, y: 500 })}>Scroll to Bottom</a>
  //   )}
    <div className="Generate-main">
       
          <div className="Generate-card blue"></div>
          <div className="Generate-card mr green"></div>
          <div className="Generate-card mr blue "></div>
          <div className="Generate-card mr green"></div>
          <div className="Generate-card blue"></div>

    </div>
  // </ScrollTo>

  );
}
export default App;
