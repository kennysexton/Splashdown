import React, { Component } from 'react'

export default class CityName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            //data-aos="fade-up" data-aos-duration="1000"
            <header className="City-Name">
                <h1>{this.props.data}</h1>
            </header>
        );
    }
}