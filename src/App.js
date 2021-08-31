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
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                    <div className="nagivation-sub">
                        <Link to="/about" className="item">
                            .about( )
                        </Link>
                        <Link to="/projects" className="item">
                            .projects( )
                        </Link>
                        <a
                            href="https://github.com/YungGooby"
                            className="item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            .github( )
                        </a>
                        <a
                            href="https://github.com/YungGooby"
                            className="item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            .cv( )
                        </a>
                    </div>
                </div>
                <div className="content-window">
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <div className="typing-container">
                        <p>
                            Programming is<span className="typed-text"></span>
                            <span class="cursor">&nbsp;</span>
                        </p>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
