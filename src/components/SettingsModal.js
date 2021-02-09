import React, { useState } from 'react'

function SettingsModal() {
    const color1 = "#C2E66E"
    const color2 = "#96e6a1"
    const [unit, setUnit] = useState("imperial");
    const [symbol, setSymbol] = useState("°F");
    const [color, setColor] = useState(color1);


    return (
        <div className="settings-menu">
            <div className="setting-menu-content">
                <h3>Units </h3>
                <label className="switch" >
                    <input onChange={() => flipUnit()} value={unit} type="checkbox" />
                    <span className="slider round" > </span>
                </label>
                <h4 style={{ color: { color }.color }}>{symbol}</h4>
            </div>
        </div>
    );

    function flipUnit() {
        if ({ unit }.unit !== "metric") {
            setUnit("metric")
            setSymbol("°C")
            setColor(color2)
        } else {
            setUnit("imperial")
            setSymbol("°F")
            setColor(color1)
        }
    }
}

export default SettingsModal;
