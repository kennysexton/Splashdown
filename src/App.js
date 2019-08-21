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
      <div>
        <Welcome></Welcome>
        <Colors></Colors>
        <ImageGrid data={this.state.imgs} />
        

      </div>
      
    );
  }

}
export default App;
