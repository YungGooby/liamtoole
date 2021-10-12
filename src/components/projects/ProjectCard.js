import React from 'react';

function ProjectCard(props) {
	return (
			<div class={`pro-container ${props.styleName}`}>
				<div class='pro-container-text'>
					<h2>{props.title}</h2>
					<p>
						Tags: <b>{props.cat}</b>
					</p>
				</div>
			</div>
	);
}
export default ProjectCard;
