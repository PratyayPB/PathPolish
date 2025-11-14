import React from "react";
import bg from "../../assets/background.png";
export default function HeroTemplate2({ title, description, image }) {
  return (
    <section
      className="py-12 px-4  bg-cover bg-center h-[90vh] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-5xl min-h-screen pt-30 mx-auto items-center">
        {/* Left card */}
        <div className=" absolute mt-12 ml-10 max-w-xl">
          <div className="bg-gray-100 rounded-lg px-15 py-15 shadow-sm border border-gray-200 flex flex-col gap-2">
            <h2 className=" text-2xl md:text-4xl font-bold text-[#3E3651] title-font leading-tight">
              {title}
            </h2>
            <p className="body-font">{description}</p>
          </div>
        </div>

        {/* Right large colored area with icon */}
        <div className="md:col-span-6 ml-70 ">
          <div className="h-96 md:h-96 bg-[#3E3651] rounded-lg flex items-center justify-around pl-60">
            <div className="w-60 h-40  rounded-xl shadow-md flex items-center justify-center ml-20">
              {image && (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-xl w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
