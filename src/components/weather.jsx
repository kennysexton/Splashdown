import React, { Component } from 'react'

export default class Weather extends Component {

    render() {
        return (
            // data-aos="fade-up" data-aos-duration="1000"
            <div className="weather-information">
                <h2>{this.props.weather}</h2>
                <img className="weather-icon" src={'https://openweathermap.org/img/wn/' + this.props.icon + '@2x.png'} alt="current weather icon" />
            </div>

        );
    }
}