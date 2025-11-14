import React from "react";

import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import InterviewTypePage from "../ui/InterviewTypePage";
import InterviewSimulator from "../ui/InterviewSimulator";
import Testimonials from "../ui/Testimonials";
import HeroImage from "../../assets/interviewHero.jpg";
import bg from "../../assets/bgLong.png";
const Interview = () => {
  return (
    <div>
      <HeroTemplate
        image={{
          src: HeroImage,
          alt: "A descriptive alt text for the image",
        }}
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
      />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <InterviewTypePage />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Interview;
