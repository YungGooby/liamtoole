// Modules
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { keepTheme } from './components/functions/functions';
import { AnimatePresence } from 'framer-motion';

// Components
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Nav from './components/nav/Nav';

// Styles
import './App.css';

function App() {
	const location = useLocation();
	useEffect(() => {
		keepTheme();
	});
	return (
		<div className='app'>
			<Nav />
			<div className='content-window'>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.key}>
						<Route exact path='/about' component={About} />
						<Route exact path='/projects' component={Projects} />
						<Route exact path='/' component={Home} />
					</Switch>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	);
}

export default App;
