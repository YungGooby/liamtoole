import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import logo from '../images/logo.svg';

const MobileNav = () => {
	return (
		<>
			<div className='navigation'>
				<Link to='/'>
					<img src={logo} className='logo' alt='logo' />
				</Link>
			</div>
			<div className='navigation-sub'>
				<Link to='/about' className='item'>
					[ about ]
				</Link>
				<Link to='/projects' className='item'>
					[ projects ]
				</Link>
				<a
					href='https://github.com/YungGooby'
					className='item'
					target='_blank'
					rel='noreferrer'
				>
					[ github ]
				</a>
				<a
					href='https://github.com/YungGooby'
					className='item'
					target='_blank'
					rel='noreferrer'
				>
					[ cv ]
				</a>
				<Toggle />
			</div>
		</>
	);
};

export default MobileNav;
