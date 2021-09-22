import AboutBlock from "./AboutBlock";
import { motion } from "framer-motion";

const aboutVariants = {
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

function About() {
    return (
        <motion.div
            variants={aboutVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h1>A little bit about myself.</h1>
            <hr className='solid' />
            <AboutBlock />
            <div className='contact-wrapper'>
                <button className='contact-button'>Contact Me</button>
            </div>
        </motion.div>
    );
}

export default About;
