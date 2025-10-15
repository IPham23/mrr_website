import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

export default function Navbar() {
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  //close both menu and dropdown
  const handleClose = () => {
    setIsMobileOpen(false);
    setIsModelsOpen(false);
  };

  return (
    <header className="nav flex items-center justify-between sm:px-[20px] sm:py-4 lg:px-[60px] lg:py-4 2xl:px-[288px] 2xl:py-4 relative">
      {/* Logo */}
      <a className="siteLogo" href="/">
        <img src="/src/assets/logos/site-logo.png" alt="Site Logo" />
      </a>

      {/* HAMBURGER */}
      <button
        className="lg:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle navigation"
      >
        <span className="w-6 h-[2px] bg-black block"></span>
        <span className="w-6 h-[2px] bg-black block"></span>
        <span className="w-6 h-[2px] bg-black block"></span>
      </button>

      {/* DESKTOP NAV */}
      <nav className="hidden! lg:flex! gap-6 items-center">
        <NavLink to="/mainboard" end>MAIN BOARD</NavLink>
        <NavLink to="/infocus">INFOCUS</NavLink>

        {/* Models dropdown */}
        <div
          className="nav-dropdown relative"
          onMouseEnter={() => setIsModelsOpen(true)}
          onMouseLeave={() => setIsModelsOpen(false)}
        >
          <NavLink to="/models" className="nav-dropdown-trigger inline-flex items-center gap-2">
            MODELS <span className={`dropdown-arrow ${isModelsOpen ? "open" : ""}`}>▼</span>
          </NavLink>

          {isModelsOpen && (
            <div className="nav-submenu absolute mt-2 bg-white shadow p-3">
              <NavLink to="/models/kids">Kids</NavLink>
              <NavLink to="/models/teens">Teens</NavLink>
              <NavLink to="/models/thai">Thai</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/grwmrr">GRWMRR</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
      </nav>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="lg:hidden flex flex-col gap-4 fixed top-0 right-0 h-full w-[70%] bg-[var(--bg)] pt-20 p-6 shadow-lg z-9999">
          {/* Close button */}
          <button className="absolute top-6 right-6 text-4xl" onClick={handleClose}>×</button>
          <NavLink to="/mainboard" end onClick={handleClose}>MAIN BOARD</NavLink>
          <NavLink to="/infocus" onClick={handleClose}>INFOCUS</NavLink>

          {/* MODELS dropdown */}
          <div>
            <div className="flex items-center gap-4 cursor-pointer">
              <NavLink to="/models" onClick={handleClose}>MODELS</NavLink>
              <span className={`transition-transform ${isModelsOpen ? "rotate-180" : ""}`}
                    onClick={() => setIsModelsOpen(!isModelsOpen)}>▼</span>
            </div>

            {isModelsOpen && (
              <div className="flex flex-col ml-4 gap-2 mt-2">
                <NavLink to="/models/kids" onClick={handleClose}>Kids</NavLink>
                <NavLink to="/models/teens" onClick={handleClose}>Teens</NavLink>
                <NavLink to="/models/thai" onClick={handleClose}>Thai</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/grwmrr" onClick={handleClose}>GRWMRR</NavLink>
          <NavLink to="/contact" onClick={handleClose}>CONTACT US</NavLink>
        </div>
      )}
    </header>
  );
}
