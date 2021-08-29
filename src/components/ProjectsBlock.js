function ProjectsBlock() {
    const projectData = require("./project-content.json");

    return projectData.map((block) =>
            <div>
                <h3>{block.title}</h3>
                <h5>Languages: {block.tags + " "}</h5>
                <p>{block.content}</p>
                <hr className="solid"/>
            </div>
        
    );
}

export default ProjectsBlock;
