import React from "react";
import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import placeholderImage from "../../assets/img-placeholder.png";
import RoadmapForm from "../ui/RoadmapForm";

const Roadmap = () => {
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
            <button className="bg-gray-2    00 p-3">Explore</button>
            <button className="bg-gray-200 p-3">Get Started</button>
          </>
        }
      />
      <RoadmapForm />

      <Features />
    </div>
  );
};

export default Roadmap;
