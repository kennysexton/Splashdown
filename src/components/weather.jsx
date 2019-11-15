import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        // data-aos="fade-up" data-aos-duration="1000"
        <div className="flight-information">
            <h2>{this.props.data}</h2>
        </div>
            
        );
    }
}