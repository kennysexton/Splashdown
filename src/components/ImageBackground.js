import React, { useState } from 'react';
import Spinner from './Spinner'

// Uses css inline styling to take advantage of this method css centering
function ImageBackground(props) {

    const [loading] = useState(false)

    return (
        loading ? (<Spinner></Spinner>) : (
            <div className="bg">
                <img src={props.data.full} style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    overflow: 'none',
                    objectFit: 'contain',
                    background: 'center center no-repeat'
                    
                }}>
                </img>
            </div >)

    );

}

export default ImageBackground;