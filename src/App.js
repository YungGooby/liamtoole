import { BrowserRouter, Route } from "react-router-dom";
import { useEffect } from "react";
import { keepTheme } from "./components/functions/functions";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";

import "./App.css";

function App() {
    useEffect(() => {
        keepTheme();
    });
    return (
        <div className='app'>
            <BrowserRouter>
                <Nav />
                <div className='content-window'>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/' component={Home} />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
