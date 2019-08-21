import React from 'react';
import Img from './img';

const ImgageGrid = props => {
	const results = props.data;
	let imgs = results.map(img => <Img url={img.urls.small} key={img.id}/>);

	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default ImgageGrid;