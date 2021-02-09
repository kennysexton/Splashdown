import React, { useState } from 'react'

function SettingsModal() {
    const [unit, setUnit] = useState("imperial");
    const [symbol, setSymbol] = useState("°F");

    return (
        <div className="settings-menu">
            <div className="setting-menu-content">
                <h3>Units </h3>
                <label className="switch" >
                    <input onChange={() => flipUnit()} value={unit} type="checkbox" />
                    <span className="slider round" > </span>
                </label>
                <h4>{symbol}</h4>
            </div>
        </div>
    );

    function flipUnit() {
        if ({ unit }.unit !== "metric") {
            console.log("flip to metric")
            setUnit("metric")
            setSymbol("°C")
        } else {
            console.log("flip to imperial")
            setUnit("imperial")
            setSymbol("°F")
        }
    }
}

export default SettingsModal;
