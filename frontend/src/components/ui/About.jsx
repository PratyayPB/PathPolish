import React, { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/aboutHero.jpg";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 scroll-mt-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-30 px-6 md:px-12">
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

          {/* <Link to="/contact">
            <button className="flex items-center bg-[#3E3651] text-white rounded-4xl px-6 py-4 hover:bg-violet-800 cursor-pointer">
              Contact Us
            </button>
          </Link> */}
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="About Page Hero Image"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
});

export default About;
