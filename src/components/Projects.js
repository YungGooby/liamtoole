// import ProjectsBlock from "./ProjectsBlock";
import ProjectCard from "./ProjectCard";
import testImage from './images/testImage.PNG'

function Projects() {
    return (
        <>
            <h1>Projects being worked on</h1>
            <hr className="solid"/>
            <ProjectCard
            link="/discordscrape"
            image="https://parentzone.org.uk/sites/default/files/discord_logo_wordmark_2400.0.jpg"
            title="Discord Chat Scraper"
            cat="Python"/>
            <ProjectCard
            link="/"
            image={testImage}
            title="Portfolio"
            cat="Website"/>
        </>
    );
}

export default Projects;
