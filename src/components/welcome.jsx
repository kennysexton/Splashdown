import React, { Component } from 'react'


export default class Welcome extends Component {
    render() {
        return (
        <div className="App">
            <header className="Welcome">
            <h1>Splashdown</h1>
            <button  href="#colordiv" data-aos="fade-up" data-aos-duration="1000" className="Gen-button ">
                Generate Color Scheme
            </button>
            </header>
        </div>
        );
    }
}