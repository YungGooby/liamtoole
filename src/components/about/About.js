import AboutBlock from "./AboutBlock";
import { motion } from "framer-motion";
function About() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
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
