import React from 'react'

function Weather(props) {

    return (
        <div className="weather-information">
            <h2>{props.weather}</h2>
            <img className="weather-icon" src={'https://openweathermap.org/img/wn/' + props.icon + '@2x.png'} alt="current weather icon" />
        </div>

    );
}

export default Weather;