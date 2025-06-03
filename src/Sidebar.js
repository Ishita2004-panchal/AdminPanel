import React, { useEffect } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import dashboard from './dashboard.png';
import movie from './movieicon.png';
import booking from './statsTicket.png';
import user from './statsuser.png';
import logoD from './logoD.png';
import logoL from './footerlogo_transparent.png';

function Sidebar({ isOpen, closeSidebar, isMobile, toggleTheme, theme }) {
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowX = "hidden";
            // document.body.style.width = "84px"
        }
        else {
            document.body.style.overflow = "auto";
        }
    })
    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        const isLight = theme === "light";

        let base = "btn w-100 d-flex align-items-center justify-content-between";
        let bg = isActive
            ? isLight
                ? "bg-white border border-dark"
                : "bg-secondary"
            : isLight
                ? "bg-outline-light"
                : "bg-outline-dark";

        let text = isLight ? "text-dark" : "text-light";

        return `${base} ${bg} ${text}`;
    };

    return (
        <div
            className={`Sidebar ${isOpen ? "open" : "closed"} ${theme === "light" ? "text-dark" : "text-light"}`}
            style={{
                backgroundColor: theme === "light" ? "#F0F0F0" : "#343434",
                display: !isOpen && isMobile ? { display: "none" } : {}
            }}>
            {isMobile && (
                <div className="closebtn" onClick={closeSidebar}>
                    &times;
                </div>
            )}

            <div className="d-flex align-items-center justify-content-center flex-column p-3 text-white text-center  ">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto px-4 text-white text-decoration-none justify-content-center"
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={`${theme === "light" ? logoD : logoL}`} alt="Logo" />
                        <span className={`fs-4 text-light ${theme === "light" ? "text-dark" : "text-light"}`}>CinemaSwift</span>
                    </div>
                    {!isMobile && (
                        <div className="closebtn" onClick={closeSidebar}>
                            <img src="close.png" alt="Close" />
                        </div>
                    )}
                </a>
                <hr />
                <ul className="nav nav-pills  mb-auto">
                    <li className="nav-item p-3 d-flex  icons1">
                        <Link
                            to="/"
                            className={`btn w-100 d-flex align-items-center justify-content-start 
                                ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}
                                ${location.pathname === "/"
                                    ? (theme === "light" ? "border border-dark" : "border border-light")
                                    : (theme === "light" ? "bg-outline-dark" : "bg-outline-light")
                                }`}
                            onClick={isMobile ? closeSidebar : closeSidebar}
                        >
                            <img src={dashboard} className="me-2" alt="Dashboard" />
                            <div className={`dashcards ${theme === "light" ? "text-dark" : "text-light"} `} >DashBoard</div>
                        </Link>

                    </li>
                    <li className="nav-item p-3 icons1 d-flex align-items-center justify-content-start ">
                        <Link
                            to="/movies"
                            className={`btn w-100 text-center d-flex align-items-center justify-content-between text-white 
                                ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} 
                                 ${location.pathname === "/movies" ? (theme === "light" ? "border border-dark" : "border border-light") : (theme === "light" ? "bg-outline-dark" : "bg-outline-light")}`}
                            onClick={isMobile ? closeSidebar : closeSidebar}
                        >
                            <div >
                                <img src={movie} className="me-2" />
                            </div>
                            <div className={`dashcards ${theme === "light" ? "text-dark" : "text-light"}`}>
                                Movies
                            </div>

                        </Link>
                    </li>
                    <li className="nav-item p-3 icons1 d-flex align-items-center justify-content-center ">
                        <Link
                            to="/bookings"
                            className={`btn w-100 text-center text-white d-flex align-items-center justify-content-between 
                                ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}
                                ${location.pathname === "/bookings" ?
                                    (theme === "light" ? "border border-dark" : "border border-light") : (theme === "light" ? "bg-outline-dark" : "bg-outline-light")
                                }`}
                            onClick={isMobile ? closeSidebar : closeSidebar}
                        >
                            <div>
                                <img src={booking} className="me-2" />
                            </div>
                            <div className={`dashcards ${theme === "light" ? "text-dark" : "text-light"}`}>
                                Bookings
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item p-3 icons1 d-flex align-items-center justify-content-center">
                        <Link
                            to="/users"
                            className={`btn w-100 text-center text-white d-flex align-items-center justify-content-between 
                                ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}
                                ${location.pathname === "/users" ?
                                    (theme === "light" ? "border border-dark" : "border border-light") : (theme === "light" ? "bg-outline-dark" : "bg-outline-light")
                                }`}
                            onClick={isMobile ? closeSidebar : closeSidebar}
                        >
                            <div>
                                <img src={user} className="me-2" />
                            </div>
                            <div className={`dashcards ${theme === "light" ? "text-dark" : "text-light"}`}>
                                Users
                            </div>
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>
        </div >
    );
}

export default Sidebar;
