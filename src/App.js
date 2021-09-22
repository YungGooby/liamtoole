// Modules
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { keepTheme } from "./components/functions/functions";
import { AnimatePresence } from "framer-motion";

// Components
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";

// Styles
import "./App.css";

function App() {
    useEffect(() => {
        keepTheme();
    });
    return (
        <div className='app'>
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <div className='content-window'>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/' component={Home} />
                </div>
                <Footer />
            </AnimatePresence>
        </div>
    );
}

export default App;
