// import logo from './logo.svg';
// import './App.css';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import './sidebar.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Users from './Users';
// import Dashboard from './Dashboard';
// import Movie from './Movie';
// import Booking from './Booking';


// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen((prev) => !prev)
//   }
//   return (
//     <Router>

//       <div className="App">
//         <Sidebar isOpen={isOpen} />
//         <div className={`main-container ${isOpen ? "shift" : ""}`}>
//           <Header toggleSidebar={toggleSidebar} />
//           <div className='content mx-3'>
//             <Routes>
//               <Route path='/' element={<Dashboard />} />
//               <Route path='/movies' element={<Movie />} />
//               <Route path='/users' element={<Users />} />
//               <Route path='bookings' element={<Booking />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </Router >

//   );
// }

// export default App;


// import './App.css';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import './sidebar.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Users from './Users';
// import Dashboard from './Dashboard';
// import Movie from './Movie';
// import Booking from './Booking';
// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const toggleSidebar = () => {
//     setIsOpen(prev => !prev);
//   };
//   const closeSidebar = () => {
//     if (isMobile) {
//       setIsOpen(false);
//     }
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       // Close sidebar when switching from mobile to desktop view
//       if (window.innerWidth > 768 && isOpen) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isOpen]);
//   return (
//     <Router>
//       <div className="App">
//         {/ Overlay for mobile view - click to close sidebar /}
//         {isOpen && isMobile && (
//           <div
//             className="sidebar-overlay"
//             onClick={closeSidebar}
//           />
//         )}

//         <Sidebar
//           isOpen={isOpen}
//           toggleSidebar={toggleSidebar}
//           isMobile={isMobile}
//         />

//         <div className={`main-container ${isOpen ? "shift" : ""}`}>
//           <Header
//             toggleSidebar={toggleSidebar}
//             isSidebarOpen={isOpen}
//           />

//           <div className='content mx-3'>
//             <Routes>
//               <Route path='/' element={<Dashboard />} />
//               <Route path='/movies' element={<Movie />} />
//               <Route path='/users' element={<Users />} />
//               <Route path='/bookings' element={<Booking />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App; 

// import "./App.css";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "./sidebar.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Users from "./Users";
// import Dashboard from "./Dashboard";
// import Movie from "./Movie";
// import Booking from "./Booking";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const toggleSidebar = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const closeSidebar = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth > 768 && isOpen) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isOpen]);

//   return (
//     <Router>
//       <div className="App">
//         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} />

//         {isOpen && isMobile && (
//           <div className="sidebar-overlay" onClick={closeSidebar} />
//         )}

//         <Sidebar
//           isOpen={isOpen}
//           closeSidebar={closeSidebar}
//           isMobile={isMobile}
//           toggleSidebar={toggleSidebar}
//         />

//         <div className={`main-container ${isOpen && !isMobile ? "shift" : ""}`}>
//           <div className="content mx-3">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/movies" element={<Movie />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/bookings" element={<Booking />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import "./App.css";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "./sidebar.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Users from "./Users";
// import Dashboard from "./Dashboard";
// import Movie from "./Movie";
// import Booking from "./Booking";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const toggleSidebar = () => {
//     setIsOpen((prev) => !prev);
//   };
//   const closeSidebar = () => {
//     setIsOpen(false);
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth > 768 && isOpen) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isOpen]);
//   return (
//     <Router>
//       <div className="App">
//         <div>
//           {/* <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} /> */}
//           <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} className={`main-container ${isOpen ? "shift" : ""}`} />
//         </div>
//         {isOpen && isMobile && (
//           <div className="sidebar-overlay" onClick={closeSidebar} />
//         )}

//         <Sidebar
//           isOpen={isOpen}
//           closeSidebar={closeSidebar}
//           isMobile={isMobile}
//           toggleSidebar={toggleSidebar}
//         />

//         <div className={`main-container ${isOpen ? "shift" : ""}`}>
//           <div className="content mx-3">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/movies" element={<Movie />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/bookings" element={<Booking />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./sidebar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Users from "./Users";
import Dashboard from "./Dashboard";
import Movie from "./Movie";
import Booking from "./Booking";
import Login from "./Login";
import ProfilePage from "./ProfilePage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [theme, setTheme] = useState("dark");

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <Router>
      <div className={`App ${theme === "light" ? "light" : ""}`}>
        <Header
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isOpen}
          className={`header ${isOpen ? "shift" : ""}`}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        {isOpen && isMobile && (
          <div className="sidebar-overlay" onClick={closeSidebar} />
        )}

        <Sidebar
          isOpen={isOpen}
          closeSidebar={closeSidebar}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
          theme={theme}
        />

        <div className={`main-container ${isOpen ? "shift" : ""}`}>
          <div className="content mx-3">
            <Routes>
              <Route path="/" element={<Dashboard theme={theme} />} />
              <Route path="/movies" element={<Movie theme={theme} />} />
              <Route path="/users" element={<Users theme={theme} />} />
              <Route path="/bookings" element={<Booking theme={theme} />} />
              <Route path="/login" element={<Login theme={theme} />} />
              <Route path="/profilepage" element={<ProfilePage theme={theme} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
