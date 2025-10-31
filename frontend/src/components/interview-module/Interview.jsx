import React from "react";

import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import InterviewTypePage from "../ui/InterviewTypePage";
import InterviewSimulator from "../ui/InterviewSimulator";
import placeholderImage from "../../assets/img-placeholder.png";

const Interview = () => {
  return (
    <div>
      <HeroTemplate
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
        image={{
          src: placeholderImage,
          alt: "A descriptive alt text for the image",
        }}
        actions={
          <>
            <button className="bg-gray-200 p-3">Explore</button>
            <button className="bg-gray-200 p-3">Get Started</button>
          </>
        }
      />
      <InterviewTypePage />
      <InterviewSimulator />
      <Features />
    </div>
  );
};

export default Interview;
