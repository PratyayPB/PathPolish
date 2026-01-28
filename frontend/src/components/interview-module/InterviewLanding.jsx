import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import InterviewTypePage from "../ui/InterviewTypePage";
import InterviewSimulator from "../ui/InterviewSimulator";
import Testimonials from "../ui/Testimonials";
import HeroImage from "../../assets/interviewHero.jpg";
import bg from "../../assets/bgLong.png";

const Interview = () => {
  useEffect(() => {
    toast.info("You must login to use this feature", {
      autoClose: 3000,
      position: "top-right",
    });
  }, []);
  return (
    <div>
      <ToastContainer />
      <HeroTemplate
        image={{
          src: HeroImage,
          alt: "Interview preparation session",
        }}
        title="Ace Your Next Interview"
        description="Practice with our AI-powered interview simulator. Choose from behavioral, technical, or case study interviews and get instant, actionable feedback to improve your performance."
        actions={
          <button
            onClick={() =>
              document
                .getElementById("interview-simulator")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#3E3651] text-white px-6 py-3 rounded-full hover:bg-violet-800 transition shadow-lg cursor-pointer"
          >
            Start Practice
          </button>
        }
      />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div id="interview-simulator" className="scroll-mt-20">
          <InterviewTypePage />
        </div>
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Interview;
