import React, { useEffect, useState } from "react";
import { setTheme } from "../functions/functions";
import brightness from "../images/brightness.svg";

function Toggle() {
    const [togClass, setTogClass] = useState("dark");
    let theme = localStorage.getItem("theme");

    const handleOnClick = () => {
        if (localStorage.getItem("theme") === "theme-dark") {
            setTheme("theme-light");
            setTogClass("light");
        } else {
            setTheme("theme-dark");
            setTogClass("dark");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("theme") === "theme-dark") {
            setTogClass("dark");
        } else if (localStorage.getItem("theme") === "theme-light") {
            setTogClass("light");
        }
    }, [theme]);

    return (
        <div className='item theme-icon'>
            {togClass === "light" ? (
                <img
                    src={brightness}
                    alt='theme switch dark'
                    className="dark"
                    onClick={handleOnClick}
                />
            ) : (
                <img
                    src={brightness}
                    alt='theme switch'
                    className="light"
                    onClick={handleOnClick}
                />
            )}
        </div>
    );
}

export default Toggle;
