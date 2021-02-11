// Run: npm start 
// Build: npm run deploy

import React, { useState, useEffect } from 'react';
import { getRandomCity, round } from '../src/utils/common'

// CSS
import './App.css';
import './components/spinner.css';
import './components/settingsModal.css'

//My Components
import Spinner from './components/Spinner'
import CityName from './components/CityName'
import ImageBackground from './components/ImageBackground'
import Weather from './components/Weather'
import SettingsModal from './components/SettingsModal';

function App() {

  const [city, setCity] = useState(null);

  // Unsplash
  const [imgs, setImgs] = useState("");
  const [photographer, setPhotographer] = useState("")
  const [photographerLink, setPhotographerLink] = useState("")
  const [unsplashLink, setUnsplashLink] = useState("")

  // OpenWeather
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);

  //Visibility Toggles
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const randomCity = getRandomCity()
    setCity(randomCity)
    console.log('Shown City:  ' + randomCity)
    const unsplashQuery = 'https://api.unsplash.com/search/photos/?page=1$per_page=1&query=' + randomCity + '&client_id=' + process.env.REACT_APP_UNSPLASH_KEY
    fetch(unsplashQuery)
      .then(response => response.json())
      .then(data => {
        const result = data.results[0]
        setImgs(result.urls);
        setPhotographerLink(result.user.links.html)
        setUnsplashLink(result.links.html)
        setPhotographer(result.user.name)

        setLoading(false) // TODO move this trigger to imageBackground componenet to represent to load
      })
      .catch(err => {
        console.error(`Unsplash API error (${err})! Query: ${unsplashQuery}`);
      });

    const openWeatherQuery = 'https://api.openweathermap.org/data/2.5/weather?q=' + randomCity + '&units=imperial&apiKey=' + process.env.REACT_APP_OPEN_WEATHER_KEY
    fetch(openWeatherQuery)
      .then(response => response.json())
      .then(data => {
        setTemperature(data.main.temp);
        setIcon(data.weather[0].icon);
      })
      .catch(err => {
        console.error(`OpenWeather API error (${err})! Query: ${openWeatherQuery}`);
      });
  }, []);

  function toggleHidden() {
    console.log(`inside toggle hidden - ${hidden}`)
    setHidden(hidden => !hidden);
  };

  return (
    <div>
      {loading ? (<Spinner></Spinner>) : (
        <ImageBackground data={imgs} />
      )}

      <div onClick={() => toggleHidden()}>
        {/* Displays the name of the city */}
        <CityName data={city} />

        {/* Shows weather information */}
        <Weather weather={`${round(temperature)}°F`} icon={icon}></Weather>
      </div>

      {/* Shows settings and credits */}
      {hidden ? <div></div> : <SettingsModal photographerLink={photographerLink} name={photographer} unsplashLink={unsplashLink} />}
      <div className="bottomGradient"></div>

    </div>
  );
}

export default App;