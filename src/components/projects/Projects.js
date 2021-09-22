import ProjectCard from "./ProjectCard";
import ProjectsMobile from "./ProjectsMobile";
import { useWindowSize } from "../functions/functions";
import { motion } from "framer-motion";

const projectVariants = {
    hidden: {
        y: "100vh",
        overflow: "hidden"
    },
    visible: {
        y: "0vh",
        overflow: "auto",
        transition: { ease: "easeInOut" },
    },
    exit: {
        y: "100vh",
        overflow: "hidden",
        transition: { ease: "easeInOut" },
    },
};

function Projects() {
    return (
        <motion.div
            variants={projectVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h1>Projects being worked on</h1>
            <hr className='solid' />
            <div className='projects-container'>
                <RenderProjects />
            </div>
        </motion.div>
    );
}

const RenderProjects = () => {
    const size = useWindowSize();
    if (size.width > 768) {
        return (
            <>
                <ProjectCard
                    link='/'
                    title='Discord Chat Scraper'
                    styleName='disc-chat-scrape'
                    cat='Python, Discord'
                    complete='false'
                />
                <ProjectCard
                    link='/'
                    title='Portfolio'
                    styleName='portfolio'
                    cat='Website, React, HTML, CSS'
                    complete='false'
                />
                <ProjectCard
                    link='/'
                    title='Svelte Practice'
                    styleName='svelte-practice'
                    cat='Svelte'
                    complete='false'
                />
            </>
        );
    } else {
        return (
            <>
                <ProjectsMobile
                    link='/'
                    title='Discord Chat Scraper'
                    styleName='disc-chat-scrape'
                    complete='false'
                />
                <ProjectsMobile
                    link='/'
                    title='Portfolio'
                    styleName='portfolio'
                    complete='false'
                />
                <ProjectsMobile
                    link='/'
                    title='Svelte Practice'
                    styleName='svelte-practice'
                    complete='false'
                />
            </>
        );
    }
};
export default Projects;
