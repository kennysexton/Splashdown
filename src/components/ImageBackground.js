import React from 'react';

// Uses css inline styling to take advantage of this method css centering
const ImageBackground = props => (
        <div style={{
                background: 'url(' + props.data.full + ') no-repeat center center fixed',
                backgroundSize: "cover"
        }} className="bg">
        </div>
);

export default ImageBackground;