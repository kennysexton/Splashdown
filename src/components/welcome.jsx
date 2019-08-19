import React, { Component } from 'react'


export default class Welcome extends Component {
    render() {
        return (
        <div className="App">
            <header className="Welcome bounceIn">
            <h1>Splashdown</h1>
            <button  className="Gen-button fadeInUpBig">
                Generate Color Scheme
            </button>
            </header>
        </div>




        );
    }
}