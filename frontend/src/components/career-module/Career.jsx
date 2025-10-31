import React from "react";

import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import CareerAssessmentForm from "../ui/CareerAssessmentForm";

import placeholderImage from "../../assets/img-placeholder.png";
const Career = () => {
  return (
    <div>
      <HeroTemplate
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
      <CareerAssessmentForm />
      <Features />
    </div>
  );
};

export default Career;
