import React from "react";

import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import CareerAssessmentForm from "../ui/CareerAssessmentForm";
import Testimonials from "../ui/Testimonials";
import bg from "../../assets/bgLong.png";
import HeroImage from "../../assets/careerGuideHero.jpg";
const Career = () => {
  return (
    <div>
      <HeroTemplate
        title="Lorem ipsum dolor sit amet."
        // Prop for the p
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
        // Prop for the image
        image={{
          src: HeroImage,
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
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <CareerAssessmentForm />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Career;
