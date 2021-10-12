import React from 'react';
import AboutBlock from './AboutBlock';
import { motion } from 'framer-motion';

const aboutVariants = {
	hidden: {
		x: '100vw',
		overflow: 'hidden',
	},
	visible: {
		x: '0vw',
		overflow: 'auto',
		transition: { ease: 'easeInOut', duration: 0.5 },
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut', duration: 0.5 },
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
