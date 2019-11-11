import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        
        <button  href="#colordiv" data-aos="fade-up" data-aos-duration="1000" className="flight-information">
            {this.props.data}
        </button>
            
        );
    }
}