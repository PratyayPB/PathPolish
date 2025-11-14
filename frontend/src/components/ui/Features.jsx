import React from "react";
import FeatureCard from "./FeatureCard";
import CareerImage from "../../assets/careerGuideHero.jpg";
import RoadmapImage from "../../assets/roadmapHero.jpg";
import BlogImage from "../../assets/blogPageHero.jpg";
import InterviewHero from "../../assets/interviewHero.jpg";
import ResumeHero from "../../assets/resumeHero.jpg";
import PlaceholderImage from "../../assets/comingSoon.jpg";
import { Link } from "react-router-dom";

const Features = (props, ref) => {
  return (
    <div
      ref={ref}
      id="features"
      className="flex flex-col justify-center items-center py-30 gap-12  px-25 bg-gray-400/50 bg-blend-overlay"
    >
      <div className="text flex flex-col gap-4 items-center w-[70vw]">
        <h1 className="text-3xl font-bold title-font text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          veniam.
        </h1>
        <p className="text-center text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At placeat
          voluptates pariatur arcr quam doloremque praesentium nemo culpa eaque
          sit. Commodi maxime mollitia atque corrupti?
        </p>
      </div>

      <div className="cardsContainer grid grid-cols-2 gap-10">
        <Link to="/career">
          <FeatureCard
            image={CareerImage}
            cta="Try Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
            feature="Career Guidance"
          />
        </Link>

        <Link to="/roadmap">
          <FeatureCard
            image={RoadmapImage}
            cta="Try Now"
            description="Loremhitecto maxime ipsum voluptatibus quidem, harum
          numquam atque optio dolo ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores."
            feature="Roadmap Generator"
          />
        </Link>

        <Link to="/interview">
          <FeatureCard
            image={InterviewHero}
            cta="Try Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
            feature="Interview Simulator"
          />
        </Link>
        {/* <Link to="/resume">
          <FeatureCard
            image={ResumeHero}
            cta="Try Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
            feature="Resume Suite"
          />
        </Link> */}
        <Link to="/blogs">
          <FeatureCard
            image={BlogImage}
            cta="Try Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
            feature="Blogs"
          />
        </Link>

        <FeatureCard
          image={PlaceholderImage}
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Coming Soon"
        />
      </div>
    </div>
  );
};

export default Features;
