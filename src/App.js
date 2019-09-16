// Run: npm start 
// Build: npm run deploy

import React, { Component } from 'react';


import './App.css';

//My Components
import Welcome from './components/welcome'
import Colors from './components/colors'
import ImageGrid from './components/imageGrid.jsx'


// List of cities
const citiesArray = ["Hong Kong, China","Singapore","Bangkok, Thailand","London, United Kingdom","Paris, France","Macau","New York City, USA","Shenzhen, China","Kuala Lumpur, Malaysia","Antalya, Turkey","Istanbul, Turkey","Dubai, United Arab Emirates","Seoul, South Korea","Rome, Italy","Phuket, Thailand","Guangzhou, China","Mecca, Saudi Arabia","Pattaya, Thailand","Taipei, Taiwan","Miami, USA","Prague, Czech Republic","Shanghai, China","Las Vegas, USA","Milan, Italy","Barcelona, Spain","Moscow, Russia","Amsterdam, Netherlands","Vienna, Austria","Venice, Italy","Los Angeles, USA","Lima, Peru","Tokyo, Japan","Johannesburg, South Africa","Beijing, China","Sofia, Bulgaria","Orlando, USA","Berlin, Germany","Budapest, Hungary","Ho Chi Minh City, Vietnam","Florence, Italy","Madrid, Spain","Warsaw, Poland","Doha, Qatar","Nairobi, Kenya","Delhi, India","Mumbai, India","Chennai, India","Mexico City, Mexico","Dublin, Ireland","San Francisco, USA","Hangzhou, China","Denpasar, Indonesia","St.Petersburg, Russia","Muğla, Turkey","Brussels, Belgium","Burgas, Bulgaria","Munich, Germany","Zhuhai, China","Sydney, Australia","Edirne, Turkey","Toronto, Canada","Lisbon, Portugal","Cancún, Mexico","Buenos Aires, Argentina","Cairo, Egypt","Punta Cana, Domincan Republic","Suzhou, China","Djerba, Tunisia","Agra, India","Kraków, Poland","Bucharest, Romania","Siem Reap, Cambodia","Jaipur, India","Honolulu, USA","Manama, Bahrain","Dammam, Saudi Arabia","Hanoi, Vietnam","Andorra La Vella, Andorra","Nice, France","Zürich, Switzerland","Jakarta, Indonesia","Manila, Philippines","Chiang Mai, Thailand","Marrakech, Morocco","Sharm El Sheikh, Egypt","Marne-La-Vallée, France","Frankfurt, Germany","Abu Dhabi, United Arab Emirates","Vancouver, Canada","Guilin, China","Melbourne, Australia","Rio De Janeiro, Brazil","Riyadh, Saudi Arabia","Amman, Jordan","Sousse, Tunisia","Kiev, Ukraine","Sharjah, United Arab Emirates","Jeju Island, South Korea","Krabi, Thailand","Artvin, Turkey"]


class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      city: getRandomCity()
    }; 
  } 

  componentDidMount() {
    //fetch('https://api.unsplash.com/photos/?client_id=' + process.env.REACT_APP_API_KEY)  
    fetch('https://api.unsplash.com/search/photos/?query=London, United Kingdom&client_id=' + process.env.REACT_APP_API_KEY)
      .then(response => response.json())
      .then(data => {
        this.setState({ imgs: data.results });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }
  render() {
    return (
      <div>
        <Welcome></Welcome>
        {/* <Colors></Colors> */}
        <ImageGrid data={this.state.imgs} />
        {this.state.city}

      </div>
       
    );
  } 
}

function getRandomCity() {
  var length = citiesArray.length;
  var randomNumber = Math.floor(Math.random() * length); 
  console.log(randomNumber)
  return citiesArray[randomNumber]
}

export default App;
