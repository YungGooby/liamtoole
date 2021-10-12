import React from 'react';
import { useWindowSize } from '../functions/functions';
import { motion } from 'framer-motion';
import HomeMobileContent from './HomeMobileContent';
import HomeTerminal from './HomeTerminal';

const homeVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { ease: 'easeInOut', duration: 0.5 },
	},
	exit: {
		opacity: 0,
		transition: { ease: 'easeInOut', duration: 0.5 },
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
					Programming is <span className='home-header-accent'>...</span>
				</p>
			</div>
			{size.width > 768 ? <HomeTerminal /> : <HomeMobileContent />}
		</motion.div>
	);
}
export default HomeContent;
