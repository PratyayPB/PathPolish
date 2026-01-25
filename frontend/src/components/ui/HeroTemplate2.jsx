import React from "react";
import bg from "../../assets/background.png";
export default function HeroTemplate2({ title, description, image, actions }) {
  return (
    <section
      className="py-12 px-4 bg-cover bg-center min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
        {/* Left card */}
        <div className="order-2 md:order-1 flex justify-center md:justify-end w-full">
          <div className="bg-gray-100/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 flex flex-col gap-4 max-w-xl w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#3E3651] title-font leading-tight">
              {title}
            </h2>
            <p className="body-font text-gray-700 text-lg leading-relaxed">{description}</p>
            
            {/* Display Actions if provided */}
            {actions && (
              <div className="flex flex-wrap gap-4 mt-4">
                {actions}
              </div>
            )}
          </div>
        </div>

        {/* Right large colored area with image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-start w-full relative">
           {/* Decorative background shape */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3E3651]/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative z-10 w-full max-w-lg">
             {/* The dark purple container */}
            <div className="bg-[#3E3651] rounded-3xl p-6 md:p-10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               {/* Inner image container */}
              <div className="bg-white/10 rounded-2xl p-2 overflow-hidden shadow-inner">
                {image && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-xl w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
