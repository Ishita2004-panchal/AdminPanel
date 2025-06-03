import React from "react";
import "./sidebar.css";
import ToggleBtn from "./ToggleBtn";
import sun from "./sun.png";
import moon from "./moon.png";
import menul from "./hamburger-menu.png"
import menud from './hamburgerd.png';
import { Link } from "react-router-dom";
// import login from './Login';

// function Header({ toggleSidebar, className }) {
//     // console.log("is dark mode", isDarkMode)
//     return (
//         <div className={`header w-100 ${className}`}>
//             <nav className="navbar navbar-expand-lg navbar-light ">
//                 {/* <div className="container-fluid"> */}
//                 <div className="navbarm p-2 w-100 d-flex justify-content-between align-items-center " id="navbarSupportedContent">
//                     <form className="d-flex align-items-center">
//                         {/* <div className="d-flex align-items-center justify-content-between"> */}
//                         {/* <div className="d-flex align-items-center justify-content-between"> */}
//                         <img
//                             src={menul}
//                             className="hamburger mx-3"
//                             onClick={toggleSidebar}
//                             alt="menu"
//                         />
//                     </form>
//                     <h2 className="text-light">Admin Panel</h2>
//                     <div className="btn-group gap-3">
//                         <ToggleBtn />

//                         <button type="button" className=" btn-dark userbtn" data-bs-toggle="dropdown" aria-expanded="false">
//                             <img src="user.png" />
//                         </button>
//                         <ul className="dropdown-menu">
//                             <li><a className="dropdown-item" href="#">Settings</a></li>
//                             <li><a className="dropdown-item" href="#">Profile</a></li>
//                             <li><a className="dropdown-item" href="#">Sign out</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 {/* </div> */}
//                 {/* <div className="line"></div> */}
//             </nav>
//             {/* <br /> */}
//             {/* <hr /> */}
//             <div className="line"></div>
//         </div>
//     );
// }

// export default Header;


function Header({ toggleSidebar, isSidebarOpen, className, toggleTheme, theme }) {
    return (
        <div className={`header ${className} ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#F0F0F0" : "#343434" }}>
            <div className="d-flex justify-content-between align-items-center px-3">
                <div className="hamburger" onClick={toggleSidebar}>
                    <img src={theme === "dark" ? menul : menud} />
                </div>
                <div className={theme === "dark" ? "text-light" : "text-dark"}>
                    <h2 className="mt-2">Admin panel</h2>
                </div>

                <div>
                    <button
                        onClick={toggleTheme}
                        className="btn border-0">
                        <img src={theme === "dark" ? sun : moon} />
                    </button>
                    <button type="button" className=" btn-dark userbtn" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="user.png" />
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/profilepage">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/login">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Header;
