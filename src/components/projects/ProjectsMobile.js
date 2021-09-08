import { Link } from "react-router-dom";

function ProjectsMobile(props) {
    return (
        <>
            <div>
                <div className="proj">
                    <Link to={props.link}>
                        <div className="proj-image">
                            <img src={props.image} alt="" />
                        </div>
                    </Link>
                    
                </div>
                <div className="proj-title">{props.title}</div>
            </div>
        </>
    );
}

export default ProjectsMobile;
