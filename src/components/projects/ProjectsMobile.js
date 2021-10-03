import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsMobile({ link, title, styleName }) {
	return (
		<>
			<Link to={link}>
				<div className={`pro-container ${styleName}`}>
					<div className='pro-container-text'>
						<h2>{title}</h2>
					</div>
				</div>
			</Link>
		</>
	);
}

export default ProjectsMobile;
