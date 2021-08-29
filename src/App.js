import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="navigation">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="nagivation-sub">
                        <Link to="/about" className="item">
                            About
                        </Link>
                        <Link to="/projects" className="item">
                            Projects
                        </Link>
                        <a
                            href="https://github.com/YungGooby"
                            className="item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/YungGooby"
                            className="item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CV
                        </a>
                    </div>
                </div>
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
            </div>
        </BrowserRouter>
    );
}

export default App;
