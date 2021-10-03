import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import logo from '../images/logo.svg';
import { motion } from 'framer-motion';

const DesktopNav = () => {
	return (
		<div className='navigation'>
			<Link to='/'>
				<img src={logo} className='logo' alt='logo' />
			</Link>
			<div className='navigation-sub'>
				<motion.span whileTap={{ scale: 0.9 }}>
					<Link to='/about' className='item'>
						[ ABOUT ]
					</Link>
				</motion.span>
				<motion.span whileTap={{ scale: 0.9 }}>
					<Link to='/projects' className='item'>
						[ PROJECTS ]
					</Link>
				</motion.span>
				<motion.span whileTap={{ scale: 0.9 }}>
					<a
						href='https://github.com/YungGooby'
						className='item'
						target='_blank'
						rel='noreferrer'
					>
						[ GITHUB ]
					</a>
				</motion.span>
				<motion.span whileTap={{ scale: 0.9 }}>
					<a
						href='https://github.com/YungGooby'
						className='item'
						target='_blank'
						rel='noreferrer'
					>
						[ CV ]
					</a>
				</motion.span>
				<motion.span whileTap={{ scale: 0.9 }}>
					<Toggle />
				</motion.span>
			</div>
		</div>
	);
};

export default DesktopNav;
