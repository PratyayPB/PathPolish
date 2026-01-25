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
      className="flex flex-col justify-center items-center py-16 md:py-30 gap-8 md:gap-12 px-6 md:px-10 lg:px-20 bg-gray-400/50 bg-blend-overlay"
    >
      <div className="text flex flex-col gap-4 items-center w-full md:w-[80vw] lg:w-[70vw]">
        <h1 className="text-2xl md:text-3xl font-bold title-font text-center text-white">
          Empower Your Career Journey
        </h1>
        <p className="text-center text-white text-sm md:text-base max-w-2xl">
          Navigate your professional path with tools designed to provide clarity and confidence. 
          From personalized roadmaps to AI-driven interview simulations, we have everything you need to succeed.
        </p>
      </div>

      <div className="cardsContainer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
        <Link to="/career" onClick={() => window.scrollTo(0, 0)} >
          <FeatureCard
            image={CareerImage}
            cta="Try Now"
            description="Discover the best career path for you based on your skills and interests. Get detailed insights into various roles and industries."
            feature="Career Guidance"
          />
        </Link>

        <Link to="/roadmap" onClick={() => window.scrollTo(0, 0)} >
          <FeatureCard
            image={RoadmapImage}
            cta="Try Now"
            description="Generate a step-by-step learning roadmap tailored to your goals. Track your progress and master the skills you need."
            feature="Roadmap Generator"
          />
        </Link>

        <Link to="/interview" onClick={() => window.scrollTo(0, 0)} >
          <FeatureCard
            image={InterviewHero}
            cta="Try Now"
            description="Practice mock interviews with our AI simulator. Receive instant feedback on your answers and improve your confidence."
            feature="Interview Simulator"
          />
        </Link>
       
        <Link to="/blogs" onClick={() => window.scrollTo(0, 0)} >
          <FeatureCard
            image={BlogImage}
            cta="Try Now"
            description="Stay updated with the latest industry trends, career tips, and success stories from our community of professionals."
            feature="Blogs"
          />
        </Link>

        <FeatureCard
          image={PlaceholderImage}
          cta="Coming Soon"
          description="We are constantly working on new features to help you succeed. Stay tuned for resumes, cover letter builders, and more."
          feature="More Tools"
        />
      </div>
    </div>
  );
};

export default Features;
