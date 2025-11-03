import React, { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-white title-font leading-tight">
            About PathPolish
          </h2>
          <p className="text-white body-font leading-relaxed">
            By creating a visual guide along the way, the designer or developer
            can get input from the other people involved in the website such as
            the customer, their manager, and other members of the team.
          </p>
          <p className="text-white body-font leading-relaxed">
            The visual guide will provide a view to the customer of what their
            website or project will end up looking like.
          </p>

          <Link to="/contact">
            <button className="flex items-center bg-[#3E3651] text-white rounded-4xl px-6 py-4 hover:bg-violet-800 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative bg-gray-100 rounded-t-[20px] border border-gray-200 shadow-md w-full max-w-md aspect-video">
            {/* Mock laptop bezel */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-indigo-50 rounded-t-[20px] flex justify-center items-center border-b border-gray-200">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
            {/* Screen area */}
            <div className="w-full h-full bg-white rounded-b-[20px] mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
