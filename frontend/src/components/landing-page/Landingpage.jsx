import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroTemplate from "../ui/HeroTemplate";
import Features from "../ui/Features";
import About from "../ui/About";
import Pricing from "../ui/Pricing";
import Highlights from "../ui/Highlights";
import Faq from "../ui/Faq";
import placeholderImage from "../../assets/img-placeholder.png";

const Landingpage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a section to scroll to from navigation state
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location.state]);
  return (
    <div>
      <HeroTemplate // Prop for the h1
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        // Prop for the p
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
        // Prop for the image
        image={{
          src: placeholderImage,
          alt: "A descriptive alt text for the image",
        }}
        // Prop for the buttons
        actions={
          <>
            <button className="bg-gray-200 p-3">Explore</button>
            <button className="bg-gray-200 p-3">Get Started</button>
          </>
        }
      />
      {/* <Hero /> */}
      <About />
      <Features />
      <Highlights />
      <Pricing />
      <Faq />
    </div>
  );
};

export default Landingpage;
