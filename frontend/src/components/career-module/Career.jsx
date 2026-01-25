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
        title="Uncover Your True Potential"
        // Prop for the p
        description="Take our comprehensive career assessment to find the perfect role that aligns with your skills, interests, and aspirations. Get a detailed report and recommended learning paths."
        // Prop for the image
        image={{
          src: HeroImage,
          alt: "Person analyzing career options",
        }}
        // Prop for the buttons
        actions={
          <>
            <button 
              onClick={() => document.getElementById('career-assessment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#3E3651] text-white px-6 py-3 rounded-full hover:bg-violet-800 transition shadow-lg cursor-pointer"
            >
              Start Assessment
            </button>
           
          </>
        }
      />
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div id="career-assessment" className="scroll-mt-20">
          <CareerAssessmentForm />
        </div>
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Career;
