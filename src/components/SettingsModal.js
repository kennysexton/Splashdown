import React, { useState } from 'react'

function SettingsModal(props) {

    // Color handled at this component,  rest of state comes from parent
    const color1 = "#C2E66E"
    const color2 = "#96E6A1"
    const [color, setColor] = useState(color1);

    return (
        <div className="settings-menu">
            <div className="setting-menu-content">
                <h3>Units</h3>
                <label className="switch" >
                    <input onChange={() => flipUnit()} value={props.units.type} type="checkbox" />
                    <span className="slider round" > </span>
                </label>
                <h4 style={{ color: { color }.color }}>{props.units.symbol}</h4>
                <h5 >Photo by <a href={props.photographerLink}>{props.name}</a> on <a href={props.unsplashLink}>Unsplash</a></h5>
            </div>
        </div>
    );

    function flipUnit() {
        var units = {}
        if (props.units.type !== "metric") {
            units.type = "metric"
            units.symbol = "°C"
        } else {
            units.type = "imperial"
            units.symbol = "°F"
        }

        // Flip color
        if (color === color1) {
            setColor(color2)
        } else {
            setColor(color1)
        }

        // Call Parents on change
        props.onChange(units)
    }
}

export default SettingsModal;
