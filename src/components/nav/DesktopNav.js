import { Link } from "react-router-dom";
import Toggle from "../toggle/Toggle";
import logo from "../images/logo.svg";
import { motion } from "framer-motion";

const DesktopNav = () => {
    return (
        <div className='navigation'>
            <Link to='/'>
                <img src={logo} className='logo' alt='logo' />
            </Link>
            <div className='navigation-sub'>
                <motion.a whileTap={{ scale: 0.9 }}>
                    <Link to='/about' className='item'>
                        [ about ]
                    </Link>
                </motion.a>
                <motion.a whileTap={{ scale: 0.9 }}>
                    <Link to='/projects' className='item'>
                        [ projects ]
                    </Link>
                </motion.a>
                <motion.a whileTap={{ scale: 0.9 }}>
                    <a
                        href='https://github.com/YungGooby'
                        className='item'
                        target='_blank'
                        rel='noreferrer'
                    >
                        [ github ]
                    </a>
                </motion.a>
                <motion.a whileTap={{ scale: 0.9 }}>
                    <a
                        href='https://github.com/YungGooby'
                        className='item'
                        target='_blank'
                        rel='noreferrer'
                    >
                        [ cv ]
                    </a>
                </motion.a>
                <motion.a whileTap={{ scale: 0.9 }}>
                    <Toggle />
                </motion.a>
            </div>
        </div>
    );
};

export default DesktopNav;
