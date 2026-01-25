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
        title="Chart Your Course to Mastery"
        description="Generate personalized, step-by-step learning roadmaps for any tech stack or role. Track your progress, access curated resources, and achieve your learning goals efficiently."
        image={{
          src: HeroImage,
          alt: "Roadmap visualization",
        }}
        actions={
          <>
            <button 
              onClick={() => document.getElementById('roadmap-generator')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#3E3651] text-white px-6 py-3 rounded-full hover:bg-violet-800 transition shadow-lg cursor-pointer"
            >
              Create Roadmap
            </button>
            
          </>
        }
      />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div id="roadmap-generator" className="scroll-mt-20">
          <RoadmapForm />
        </div>
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Roadmap;
