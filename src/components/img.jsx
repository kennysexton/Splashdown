import React from 'react';

// 
const Img = props => ( 
        <div className="left" width={props.width} ata-aos="fade-up">
                <img src={props.url} alt={props.alt} />
                {/* <img src={props.icon} className="user_icons"/>

                <a href={props.user}>{props.name}</a> */}
        </div>
       
);

export default Img;