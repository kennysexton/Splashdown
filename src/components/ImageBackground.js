import React from 'react';
import Img from './Img';

const ImageBackground = props => {
	const results = props.data;
	let imgs = results.map(img => <Img
		url={img.urls.full}
		alt={img.alt_description}
		user={img.user.links.html}
		name={img.user.name}
		width={img.width}
		height={img.height}
		key={img.id} />);

	return (
		<div>
			{imgs[0]}
		</div>
	);
};
export default ImageBackground;