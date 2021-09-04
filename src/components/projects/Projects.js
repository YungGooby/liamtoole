// import ProjectsBlock from "./ProjectsBlock";
import ProjectCard from "./ProjectCard";
import logo from '../../logo.svg'
import svelteImage from "../images/rsz_svelteimage.png";
import discImage from "../images/rsz_discordimage.jpeg"

function Projects() {
    return (
        <>
            <h1>Projects being worked on</h1>
            <hr className="solid" />
            <div className="proj-container">
                <ProjectCard
                    link="/discordscrape"
                    image={discImage}
                    title="Discord Chat Scraper"
                    cat="Python, Discord"
                    complete="false"
                />
                <ProjectCard
                    link="/"
                    image={logo}
                    title="Portfolio"
                    cat="Website, React, HTML, CSS"
                    complete="false"
                />
                <ProjectCard
                    link="/"
                    image={svelteImage}
                    title="Svelte Practice"
                    cat="Svelte"
                    complete="false"
                />
            </div>
        </>
    );
}

export default Projects;
