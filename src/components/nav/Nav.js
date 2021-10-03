import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useWindowSize } from '../functions/functions';

const Nav = () => {
	const size = useWindowSize();

	return <>{size.width > 763 ? <DesktopNav /> : <MobileNav />}</>;
};

export default Nav;
