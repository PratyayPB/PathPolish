import React from "react";
import { Search, Image } from "lucide-react";
import HeroImage from "../../assets/blogPageHero.jpg";

const BlogPageHero = () => {
  return (
    <div className="min-h-[60vh]  flex flex-col items-center justify-center px-6 py-12">
      {/* Top Search Bar */}
      {/* <div className="w-full max-w-6xl mb-8 flex justify-center">
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-2 w-full max-w-sm">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full focus:outline-none text-sm text-gray-600"
          />
        </div>
      </div> */}

      {/* Hero Card */}
      <div className="w-full max-w-6xl bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col sm:flex-row overflow-hidden">
        {/* Left Image / Icon */}
        <div className="flex justify-center items-center bg-gray-50 w-full sm:w-1/2 p-12">
          {/* <Image size={60} className="text-gray-400" /> */}
          <img src={HeroImage} alt="" className="rounded-2xl" />
        </div>

        {/* Right Content */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            How to Structure a Fullstack Project
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            "A clean fullstack structure separates frontend, backend, database
            configurations, environment files, and service layers. Good
            structure improves readability and scalability.
          </p>

          <hr className="border-gray-200 mb-4" />

          <div className="flex justify-between items-center">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
              Fullstack Studio
            </span>
            <span className="text-gray-500 text-sm">Jan 24, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageHero;
