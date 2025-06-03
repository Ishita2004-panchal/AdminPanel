import React, { useState, useEffect } from 'react';
import './toggle.css'; // Import your CSS for styling
import sun from './sun.png'
import moon from './moon.png'

const ToggleBtn = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === "dark";
    });

    useEffect(() => {
        const mainContainer = document.querySelector(".App");
        if (mainContainer) {
            mainContainer.classList.toggle("dark", isDarkMode);
            mainContainer.classList.toggle("light", !isDarkMode);
        }
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <span className="slider">
                    <img src={sun} alt='sun Icon' className={`toggleimg ${isDarkMode ? "" : "hidden"}`} />
                    <img src={moon} alt='moon Icon' className={`toggleimg  ${isDarkMode ? "hidden" : ""}`} />
                </span>
            </label>
        </div>
    );

};

export default ToggleBtn;
