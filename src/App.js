import React, { Component } from 'react';
import Unsplash from 'unsplash-js';

import './App.css';

//My Components
import Welcome from './components/welcome'
import Colors from './components/colors'
import ImageGrid from './components/imageGrid.jsx'



class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=' + process.env.REACT_APP_API_KEY)  
      .then(response => response.json())
      .then(data => {
        this.setState({ imgs: data });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }
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
        <ImageGrid data={this.state.imgs} />
        

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
