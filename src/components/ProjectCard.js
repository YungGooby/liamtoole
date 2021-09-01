import { Link } from "react-router-dom";

function ProjectCard(props) {
    return (
        <div className="proj">
            <Link to={props.link}>
                <div className="proj-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="proj-title">{props.title}</div>
                <div className="proj-cat">Tags: {props.cat}</div>
            </Link>
        </div>
    );
}
export default ProjectCard;
