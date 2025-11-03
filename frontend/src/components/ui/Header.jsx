import React from "react";
import logo from "../../assets/logo-pathpolish.png";
import ChevronDown from "../../assets/icons/chevron-down.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bg from "../../assets/headerBackground.png";
import "../../App.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate home first then scroll
      // mark that navigation came from the header so landing page only
      // performs the scroll when intended by user interaction
      navigate("/", { state: { fromHeader: true, scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="container bg-[#f8f5f5] bg-blend-multiply  h-[10vh] bg-cover bg-center bg-no-repeat title-font font-bold text-[#3E3651]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <nav className="flex justify-around gap-30 items-center py-4">
        <ul>
          <Link to="/">
            <img src={logo} alt="PathPolish logo" width={60} />
          </Link>
        </ul>
        <ul>
          <ul className="flex  style-none gap-10 text-lg font-bold items-center ">
            <Link to="/" className="hover:text-violet-600">
              Home
            </Link>
            <li
              onClick={() => handleSectionNavigation("about")}
              className="cursor-pointer hover:text-violet-600 transition-colors"
            >
              About
            </li>
            <li
              onClick={() => handleSectionNavigation("pricing")}
              className="cursor-pointer hover:text-violet-600 transition-colors"
            >
              Pricing
            </li>
            <li className="dropdown-list relative group flex gap-1 cursor-pointer hover:text-violet-600">
              Features <img src={ChevronDown} alt="" width={20} />
              <ul className="absolute hidden group-hover:flex flex-col gap-2 py-4 bg-white shadow-md rounded-md mt-8 p-2 w-48 text-sm text-gray-700 ">
                <Link to="/resume" className="hover:bg-gray-100 px-3 py-1">
                  Resume Suite
                </Link>
                <Link to="/career" className="hover:bg-gray-100 px-3 py-1">
                  Career Guidance
                </Link>
                <Link to="/roadmap" className="hover:bg-gray-100 px-3 py-1">
                  Roadmap Generator
                </Link>
                <Link to="/interview" className="hover:bg-gray-100 px-3 py-1">
                  Interview Simulation
                </Link>
                <Link to="/blogs" className="hover:bg-gray-100 px-3 py-1">
                  Blogs
                </Link>
              </ul>
            </li>

            <li className="pl-2">
              <button className="bg-[#3E3651] text-white px-6 py-2 rounded-4xl">
                Login
              </button>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
