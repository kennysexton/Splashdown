// Run: npm start 
// Build: npm run deploy

import React, { useState, useEffect } from 'react';
import { getRandomCity, round } from '../src/utils/common'

// CSS
import './App.css';
import './components/spinner.css';
import './components/settingsModal.css'

//My Components
import CityName from './components/CityName'
import ImageBackground from './components/ImageBackground'
import Weather from './components/Weather'
import SettingsModal from './components/SettingsModal';

function App() {

    // Unsplash backlink guidelines
    const linkBackAttribute = `?utm_source=${process.env.APP_NAME}&utm_medium=referral`

    const [city, setCity] = useState(null);

    // Unsplash
    const [imgs, setImgs] = useState("");
    const [photographer, setPhotographer] = useState("")
    const [photographerLink, setPhotographerLink] = useState("")
    const [unsplashLink, setUnsplashLink] = useState("")

    // OpenWeather
    const [temperature, setTemperature] = useState(null);
    const [icon, setIcon] = useState(null);
    const [units, setUnits] = useState({ type: "imperial", symbol: "°F" });

    //Visibility Toggles
    const [hidden, setHidden] = useState(true);

    // API Fetching useEffect
    useEffect(() => {
        const randomCity = getRandomCity()
        setCity(randomCity)
        console.log(`Shown City - ${randomCity}`)
        const unsplashQuery = `https://api.unsplash.com/search/photos/?page=1$per_page=1&query=${randomCity}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
        fetch(unsplashQuery)
            .then(response => response.json())
            .then(data => {
                const result = data.results[0]
                setImgs(result.urls);
                setPhotographerLink(result.user.links.html + linkBackAttribute)
                setUnsplashLink(result.links.html + linkBackAttribute)
                setPhotographer(result.user.name)

            })
            .catch(err => {
                console.error(`Unsplash API error (${err})! Query: ${unsplashQuery}`);
            });

        const openWeatherQuery = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&units=${units.type}&apiKey=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
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

    // Keyboard events
    useEffect(() => {
        const handleEsc = (event) => {
            switch (event.key) {
                case 'Escape':
                    setHidden(true)
                    break;
                case 'r':
                    window.location.reload()
                    break;
                case 'u':
                    setHidden(hidden => !hidden);
                    break;
                default:
                // Do nothing
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div>

            <ImageBackground data={imgs} />

            {/* Displays the name of the city */}
            <CityName data={city} />

            {/* Shows weather information */}
            <Weather weather={`${round(temperature)}${units.symbol}`} icon={icon}></Weather>

            {/* Shows settings and credits */}
            {hidden ? <div></div> : <SettingsModal photographerLink={photographerLink}
                name={photographer}
                unsplashLink={unsplashLink}
                units={units}
                onChange={(units) => convertUnits(units)} />}
            <div className="bottomGradient"></div>

        </div>
    );

    // Do this math locally instead of refetching from API
    function convertUnits(units) {
        switch (units.type) {
            case "metric":
                setTemperature((temperature - 32) / 1.8)
                break;
            case "imperial":
                setTemperature((temperature * 1.8) + 32)
                break;
            default:
                console.error(`${units.type} is not valid`)
                break;
        }
        setUnits(units)
    }
}

export default App;