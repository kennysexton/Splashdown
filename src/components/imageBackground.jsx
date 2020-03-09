import React from 'react';
import Img from './img';

const ImageBackground = props => {
	const results = props.data;
	let imgs = results.map(img => <Img 
		url={img.urls.full}
		alt={img.alt_description}
		user={img.user.links.html}
		name={img.user.name}
		width={img.width}
		height={img.height}
		key={img.id}/>);

	
	//let aspectRatio = imgs.height/img.width
	
	//document.getElementById(iID).style["padding-bottom"] = 100/(heigh/width) + "%"
  	//document.getElementById(divID).style.width = aspectRatio*200 + 'px';
    //document.getElementById(divID).style["flex-grow"] = aspectRatio*200;

	return (
		<section className="img-grid">
				{/* remove index[0] to show all images */}
				{imgs[0]}	
		</section>
	);
};
export default ImageBackground;