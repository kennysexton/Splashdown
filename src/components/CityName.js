import React from 'react'

function CityName(props) {
    return (
        <header className="City-Name">
            <h1>{props.data}</h1>
        </header>
    );
}

export default CityName