import React from "react";
import Logo from "../../assets/logo-pathpolish.png";
import bg from "../../assets/background.png";

const Footer = () => {
  return (
    <footer
      className="container mx-auto  py-12 px-50 bg-cover bg-center bg-[#f8f5f5] bg-blend-multiply"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Newsletter Section */}
      <div className="newsletter-section flex flex-col md:flex-row md:items-end mb-20">
        <div className="left-section flex flex-col items-start text-left w-full md:w-1/2 gap-4">
          <img src={Logo} alt="" width={75} />
          <p className="text-left body-font font-meidum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            sed quos autem nisi odit harum laborum aspernatur aperiam.
            Consequuntur maxime corrupti voluptatem dignissimos!
          </p>
        </div>
        <div className="right-content flex flex-col items-center text-center w-full md:w-1/2">
          <h2 className="text-2xl font-bold title-font text-[#3E3651] mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="mb-6 max-w-md body-font">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <div className="flex flex-wrap w-full max-w-md gap-4 ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 min-w-[200px] p-2 border rounded border-gray-900 border-ac focus-outline-none"
            />
            <button className="px-6 py-2 rounded-4xl bg-[#3E3651] text-white hover:bg-violet-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 body-font">
        {/* About Us Column */}
        <div className="flex flex-col gap-4 body-font">
          <h3 className="text-lg font-semibold">About us</h3>
          <ul className="space-y-2">
            <li>Mission</li>
            <li>Our team</li>
            <li>Awards</li>
            <li>Testimonials</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="space-y-2">
            <li>Web design</li>
            <li>Web development</li>
            <li>Mobile design</li>
            <li>UI/UX design</li>
            <li>Branding design</li>
          </ul>
        </div>

        {/* Portfolio Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <ul className="space-y-2">
            <li>Corporate websites</li>
            <li>E-commerce</li>
            <li>Mobile apps</li>
            <li>Landing pages</li>
            <li>UI/UX projects</li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Email: contact@brix.com</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Phone: (414) 687 - 5892</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-sm">
        <p>Copyright © 2025 Pratyay Pratim Borah | All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
