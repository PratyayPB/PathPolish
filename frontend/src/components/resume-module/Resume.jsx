import React from "react";
import HeroTemplate from "../ui/HeroTemplate2";
import Features from "../ui/Features";
import ResumeModuleSelector from "../ui/ResumeModuleSelector";
import ResumeTemplateSelector from "../ui/ResumeTemplateSelector";
import placeholderImage from "../../assets/img-placeholder.png";
import ResumeForm from "../ui/ResumeForm";

/**
 *
 * @AI MUST MAKE A @SUMMARY OF THE @PROFILE AND PUT IT ON THE TOP OF @RESUME
 * @AI MUST @CURATE RESUME BASED ON @JOB @DESCRIPTION AND @SKILLS of the user
 */
const Resume = () => {
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
      <ResumeModuleSelector />
      <ResumeTemplateSelector />
      <ResumeForm />
      <Features />
    </div>
  );
};

export default Resume;
