import { BrowserRouter, Route} from "react-router-dom";
import HomeContent from "./components/HomeContent";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <div className="content-window">
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/" component={HomeContent} />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
