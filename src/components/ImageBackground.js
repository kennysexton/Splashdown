import React, { useState } from 'react';
import Spinner from './Spinner'

// Uses css inline styling to take advantage of this method css centering
function ImageBackground(props) {

    const [loading] = useState(true)

    return (
        <div>
            {loading && <Spinner></Spinner>}
            <div className="bg">
                <img src={props.data.full} alt="" style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}>
                </img>
            </div >
        </div>

    );

}

export default ImageBackground;