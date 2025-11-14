import React from "react";
import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import HeroImage from "../../assets/roadmapHero.jpg";
import RoadmapForm from "../ui/RoadmapForm";
import Testimonials from "../ui/Testimonials";
import bg from "../../assets/bgLong.png";

const Roadmap = () => {
  return (
    <div>
      <HeroTemplate
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
        image={{
          src: HeroImage,
          alt: "A descriptive alt text for the image",
        }}
        actions={
          <>
            <button className="bg-gray-2    00 p-3">Explore</button>
            <button className="bg-gray-200 p-3">Get Started</button>
          </>
        }
      />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <RoadmapForm />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Roadmap;
