import React from 'react';

// 
const Img = props => ( 
        <div className="bg">
                <img src={props.url} alt={props.alt} />
        </div>     
);

export default Img;