import React, { Component } from 'react'

export default class CityName extends Component {
    render() {
        return (
            <header className="City-Name">
                <h1>{this.props.data}</h1>
            </header>
        );
    }
}