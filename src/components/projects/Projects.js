import ProjectCard from "./ProjectCard";
import ProjectsMobile from "./ProjectsMobile";
import logo from "../images/logo.svg"
import svelteImage from "../images/rsz_svelteimage.png";
import discImage from "../images/rsz_discordimage.jpeg";
import { useWindowSize } from "../functions/functions";

function Projects() {
    return (
        <>
            <h1>Projects being worked on</h1>
            <hr className="solid" />
            <div className="proj-container">
                <RenderProjects/>
            </div>
        </>
    );
}

const RenderProjects = () => {
    const size = useWindowSize();
    if (size.width > 768) {
        return (
            <>
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
            </>
        );
    } else {
        return (
            <>
                <ProjectsMobile
                    link="/discordscrape"
                    image={discImage}
                    title="Discord Chat Scraper"
                    complete="false"
                />
                <ProjectsMobile
                    link="/"
                    image={logo}
                    title="Portfolio"
                    complete="false"
                />
                <ProjectsMobile
                    link="/"
                    image={svelteImage}
                    title="Svelte Practice"
                    complete="false"
                />
            </>
        );
    }
};
export default Projects;
