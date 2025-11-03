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
        className="container h-[90vh] flex justify-around items-center gap-2 pb-20 bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content w-3/5 ">
          {/* Assuming h-f meant h-full */}
          <div className="content-container flex flex-col gap-6 pl-30 pr-15 ">
            {" "}
            {/* Kept your pl-30/pr-15 classes */}
            {/* 1. Title goes here */}
            {title && (
              <h1 className="text-5xl font-bold title-font text-white">
                {title}
              </h1>
            )}
            {/* 2. Subtitle goes here */}
            {subtitle && (
              <p className="text-lg text-white body-font">{subtitle}</p>
            )}
            {/* 3. Buttons (actions) go here */}
            {actions && (
              <div className="buttons flex gap-8 title-font ">{actions}</div>
            )}
          </div>
        </div>

        {/* 4. Image goes here */}
        <div className="hero-image w-2/5 ">
          {" "}
          {/* Assuming h-f meant h-full */}
          {image && <img src={image.src} alt={image.alt} />}
        </div>
      </div>
    </>
  );
};

export default HeroTemplate;
