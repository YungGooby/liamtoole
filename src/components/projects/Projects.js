import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectsMobile from './ProjectsMobile';
import { useWindowSize } from '../functions/functions';
import { motion } from 'framer-motion';

const projectVariants = {
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
					title='Discord Chat Scraper'
					styleName='disc-chat-scrape'
					cat='Python, Discord'
					complete='false'
				/>
				<ProjectCard
					title='Portfolio'
					styleName='portfolio'
					cat='Website, React, HTML, CSS'
					complete='false'
				/>
				<ProjectCard
					title='Svelte Practice'
					styleName='svelte-practice'
					cat='Svelte'
					complete='false'
				/>
				<a href='https://lt-notesapp.netlify.app/' target='_blank'>
					<ProjectCard
						title='Notes App'
						styleName='notes-app'
						cat='React, NodeJS, MongoDB'
						complete='true'
					/>
				</a>
			</>
		);
	} else {
		return (
			<>
				<ProjectsMobile
					title='Discord Chat Scraper'
					styleName='disc-chat-scrape'
					complete='false'
				/>
				<ProjectsMobile
					title='Portfolio'
					styleName='portfolio'
					complete='false'
				/>
				<ProjectsMobile
					title='Svelte Practice'
					styleName='svelte-practice'
					complete='false'
				/>
				<a href='https://lt-notesapp.netlify.app/' target='_blank'>
					<ProjectsMobile
						title='Notes App'
						styleName='notes-app'
						complete='true'
					/>
				</a>
			</>
		);
	}
};
export default Projects;
