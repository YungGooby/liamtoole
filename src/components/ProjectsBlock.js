import testImage0 from "./images/testImage.PNG";

function ProjectsBlock() {
    const projectData = require("./project-content.json");

    return projectData.map((block,index) => (
        <div key={index}>
            <h3>{block.title}</h3>
            <h5>Languages: {block.tags + " "}</h5>
            <div className="image-container">
                <img className="project-image" src={testImage0} alt="" />
            </div>
            <p>{block.content}</p>
            <hr className="solid" />
        </div>
    ));
}

export default ProjectsBlock;
