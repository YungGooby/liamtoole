import { Link } from 'react-router-dom';

function ProjectCard(props) {
	return (
		<Link to={props.link}>
			<div class={`pro-container ${props.styleName}`}>
				<div class='pro-container-text'>
					<h2>{props.title}</h2>
					<p>
						Tags: <b>{props.cat}</b>
					</p>
				</div>
			</div>
		</Link>
	);
}
export default ProjectCard;
