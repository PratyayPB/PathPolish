import React, { useState } from "react";
import logo from "../../assets/logo-pathpolish.png";
import ChevronDown from "../../assets/icons/chevron-down.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bg from "../../assets/headerBackground.png";
import "../../App.css";
import api from "../../api/api";
import useAuth from "../../context/useAuth";

import axios from "axios";

axios.defaults.withCredentials = true;

const NAV_ITEMS = [
  { name: "Home", path: "/", type: "link" },
  { name: "About", path: "about", type: "section" },
  { name: "Pricing", path: "pricing", type: "section" },
  {
    name: "Features",
    type: "dropdown",
    children: [
      { name: "Career Guidance", path: "/career" },
      { name: "Roadmap Generator", path: "/roadmap" },
      { name: "Interview Simulation", path: "/interview" },
      { name: "Blogs", path: "/blogs" },
      { name: "Admin", path: "/admin" },
    ],
  },
];

const Header = () => {
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const { isAuthenticated, loading, setIsAuthenticated } = useAuth();
  console.log(isAuthenticated);
  if (loading) {
    return (
      <div className="text-center text-[#3E3651]  ">
        Checking authentication...
      </div>
    );
  }

  const handleSectionNavigation = (sectionId) => {
    closeMobileMenu();
    if (location.pathname !== "/") {
      navigate("/", { state: { fromHeader: true, scrollTo: sectionId } });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    // localStorage.removeItem("isLoggedIn");
    // // Add any other logout logic here (e.g. axios call)
    // window.location.reload();

    try {
      await api.post("/logout");
      setIsAuthenticated(false);
      window.location.reload();
    } catch {
      console.error("Logout failed");
    }
  };

  return (
    <div
      className="bg-[#f8f5f5] bg-blend-multiply relative z-50 transition-all duration-300"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto title-font font-bold text-[#3E3651]">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="PathPolish logo"
            width={60}
            className="w-12 md:w-[60px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {NAV_ITEMS.map((item, index) => {
            if (item.type === "link") {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="hover:text-violet-600 hover:scale-105 transition-transform"
                >
                  {item.name}
                </Link>
              );
            }
            if (item.type === "section") {
              return (
                <li
                  key={index}
                  onClick={() => handleSectionNavigation(item.path)}
                  className="cursor-pointer hover:text-violet-600 transition-colors hover:scale-105 list-none"
                >
                  {item.name}
                </li>
              );
            }
            if (item.type === "dropdown") {
              return (
                <li
                  key={index}
                  className="relative group flex gap-1 cursor-pointer hover:text-violet-600 list-none items-center"
                >
                  {item.name}{" "}
                  <img src={ChevronDown} alt="" width={20} className="inline" />
                  <ul className="absolute hidden group-hover:flex flex-col gap-2 py-4 bg-white shadow-md rounded-md p-2 w-56 text-sm text-gray-700 top-full left-0 z-50">
                    {item.children.map((child, cIndex) => (
                      <Link
                        key={cIndex}
                        to={child.path}
                        className="hover:bg-gray-100 px-3 py-2 rounded-md hover:scale-105 transition-transform"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </ul>
                </li>
              );
            }
            return null;
          })}

          {!isAuthenticated ? (
            <Link to="/login">
              <button className="bg-[#3E3651] text-white px-6 py-2 rounded-full hover:bg-violet-800 hover:scale-105 cursor-pointer text-base transition-all">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="bg-[#b53542] text-white px-6 py-2 rounded-full hover:bg-red-500 hover:scale-105 cursor-pointer text-base transition-all"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-[#3E3651]"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl py-6 px-6 flex flex-col gap-6 items-center animate-in slide-in-from-top-2 duration-200 max-h-[90vh] overflow-y-auto">
          <ul className="flex flex-col gap-4 text-center text-lg w-full items-center">
            {NAV_ITEMS.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="hover:text-violet-600 block py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                );
              }
              if (item.type === "section") {
                return (
                  <li
                    key={index}
                    onClick={() => handleSectionNavigation(item.path)}
                    className="cursor-pointer hover:text-violet-600 list-none py-2"
                  >
                    {item.name}
                  </li>
                );
              }
              if (item.type === "dropdown") {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center"
                  >
                    <button
                      onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                      className="flex items-center gap-2 font-bold py-2 cursor-pointer"
                    >
                      {item.name}{" "}
                      <img
                        src={ChevronDown}
                        alt=""
                        width={20}
                        className={`transition-transform duration-200 ${
                          mobileFeaturesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileFeaturesOpen && (
                      <div className="flex flex-col gap-3 mt-2 bg-gray-50 w-full rounded-lg py-4">
                        {item.children.map((child, cIndex) => (
                          <Link
                            key={cIndex}
                            to={child.path}
                            className="hover:text-violet-600 py-2"
                            onClick={closeMobileMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </ul>

          {!isAuthenticated ? (
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="w-full max-w-xs"
            >
              <button className="bg-[#3E3651] text-white px-8 py-3 rounded-full hover:bg-violet-800 cursor-pointer w-full">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="bg-[#b53542] text-white px-8 py-3 rounded-full hover:bg-red-500 cursor-pointer w-full max-w-xs"
              onClick={() => {
                handleLogout();
                closeMobileMenu();
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
