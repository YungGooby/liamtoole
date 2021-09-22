import { useState, useEffect } from 'react';

export const useWindowSize = () => {
	const [windowSize, setWindowsSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowsSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
};

export const setTheme = (themeName) => {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
};

export const keepTheme = () => {
	if (localStorage.getItem('theme')) {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-dark');
		} else if (localStorage.getItem('theme') === 'theme-light') {
			setTheme('theme-light');
		}
	} else {
		setTheme('theme-dark');
	}
};
