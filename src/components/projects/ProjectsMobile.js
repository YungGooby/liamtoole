import { Link } from "react-router-dom";

function ProjectsMobile(props) {
    return (
        <>
            <Link to={props.link}>
            <div class={`pro-container ${props.styleName}`}>
                <div class='pro-container-text'>
                    <h2>{props.title}</h2>
                </div>
            </div>
            </Link>
        </>
    );
}

export default ProjectsMobile;
