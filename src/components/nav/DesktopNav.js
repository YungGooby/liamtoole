import { Link } from "react-router-dom";
import Toggle from "../toggle/Toggle";
import logo from "../images/logo.svg"

const DesktopNav = () => {
    return (
        <div className="navigation">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <div className="navigation-sub">
                <Link to="/about" className="item">
                    [ about ]
                </Link>
                <Link to="/projects" className="item">
                    [ projects ]
                </Link>
                <a
                    href="https://github.com/YungGooby"
                    className="item"
                    target="_blank"
                    rel="noreferrer"
                >
                    [ github ]
                </a>
                <a
                    href="https://github.com/YungGooby"
                    className="item"
                    target="_blank"
                    rel="noreferrer"
                >
                    [ cv ]
                </a>
                <Toggle/>
            </div>
        </div>
    );
};

export default DesktopNav;
