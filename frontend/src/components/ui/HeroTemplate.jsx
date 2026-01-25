import React from "react";
import bg from "../../assets/background.png";

/**
 * The main hero blueprint.
 * @param {object} props
 * @param {React.ReactNode} props.title - The main heading content.
 * @param {React.ReactNode} props.subtitle - The supporting paragraph content.
 * @param {object} props.image - Object with image src and alt text.
 * @param {string} props.image.src - The path to the image.
 * @param {string} props.image.alt - The alt text for the image.
 * @param {React.ReactNode} props.actions - The buttons or other call-to-action elements.
 */
const HeroTemplate = ({ title, subtitle, image, actions }) => {
  return (
    <>
      {/* This is the main layout structure. 
        We keep the layout classes here.
      */}

      <div
        className="min-h-[90vh] flex flex-col-reverse md:flex-row justify-center md:justify-around items-center gap-8 md:gap-2 py-10 md:py-0 md:pb-20 bg-cover bg-center px-4 md:px-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content w-full md:w-3/5 text-center md:text-left">
          {/* Assuming h-f meant h-full */}
          <div className="content-container flex flex-col gap-6 md:pl-10 lg:pl-30 md:pr-5 lg:pr-15">
            {" "}
            {/* Kept your pl-30/pr-15 classes */}
            {/* 1. Title goes here */}
            {title && (
              <h1 className="text-xl md:text-2xl lg:text-5xl font-bold title-font text-white leading-tight">
                {title}
              </h1>
            )}
            {/* 2. Subtitle goes here */}
            {subtitle && (
              <p className="text-base md:text-lg text-white body-font">
                {subtitle}
              </p>
            )}
            {/* 3. Buttons (actions) go here */}
            {actions && (
              <div className="buttons flex flex-col sm:flex-row gap-4 md:gap-8 title-font justify-center md:justify-start items-center">
                {actions}
              </div>
            )}
          </div>
        </div>

        {/* 4. Image goes here */}
        <div className="hero-image w-full md:w-2/5 flex justify-center">
          {" "}
          {/* Assuming h-f meant h-full */}
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-3xl w-4/5 md:w-full max-w-sm md:max-w-none shadow-xl"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HeroTemplate;
