import React, { Component } from 'react'

export default class CityName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="City-Name">
                <h1>{this.props.data}</h1>
            </header>
        );
    }
}