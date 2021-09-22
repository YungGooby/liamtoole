import { useWindowSize } from "../functions/functions";
import { motion } from "framer-motion";
import HomeMobileContent from "./HomeMobileContent";
import HomeTerminal from "./HomeTerminal";

const homeVariants = {
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

function HomeContent() {
    const size = useWindowSize();
    return (
        <motion.div
            variants={homeVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='home-header'>
                <p>
                    Programming is{" "}
                    <span className='home-header-accent'>...</span>
                </p>
            </div>
            {size.width > 768 ? <HomeTerminal /> : <HomeMobileContent />}
        </motion.div>
    );
}
export default HomeContent;
