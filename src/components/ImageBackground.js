import React, { useState } from 'react';
import Spinner from './Spinner'

// Uses css inline styling to take advantage of this method css centering
function ImageBackground(props) {

    const [loading] = useState(false)

    return (
        loading ? (<Spinner></Spinner>) : (
            <div className="bg">
                <img src={props.data.full} style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    minWidth: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}>
                </img>
            </div >)

    );

}

export default ImageBackground;