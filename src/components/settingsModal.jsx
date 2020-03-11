import React, { Component } from 'react'

export default class settingsModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="settings-menu">
                <h3>Units</h3>
                <label className="switch">
                    <input onChange={this.setUnit} value={this.setUnit} type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}

function setUnit() {
    console.log('unit switch changeded');
}