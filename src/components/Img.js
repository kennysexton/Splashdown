import React from 'react';

// Uses css inline styling to take advantage of this method css centering
const Img = props => (
        <div style={{
                background: 'url(' + props.url + ') no-repeat center center fixed',
                backgroundSize: "cover"
        }} className="bg">
        </div>
);

export default Img;