import React from "react";
import FeatureCard from "./FeatureCard";
const Features = () => {
  return (
    <div className="container flex flex-col justify-center items-center  gap-12 my-60 px-25 ">
      <div className="text flex flex-col gap-4 items-center w-[70vw]">
        <h1 className="text-3xl font-bold title-font text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          veniam.
        </h1>
        <p className="text-center text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At placeat
          voluptates pariatur architecto maxime ipsum voluptatibus quidem, harum
          numquam atque optio dolor quam doloremque praesentium nemo culpa eaque
          sit. Commodi maxime mollitia atque corrupti?
        </p>
      </div>

      <div className="cardsContainer grid grid-cols-3 gap-10">
        <FeatureCard
          image="../../assets/img-placeholder.png"
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Resume Suite"
        />
        <FeatureCard
          image="../../assets/img-placeholder.png"
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Career Guidance"
        />
        <FeatureCard
          image="../../assets/img-placeholder.png"
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Roadmap Generator"
        />
        <FeatureCard
          image="../../assets/img-placeholder.png"
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Interview Simulation"
        />
        <FeatureCard
          image="../../assets/img-placeholder.png"
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Blogs"
        />
        <FeatureCard
          image="../../assets/img-placeholder.png"
          cta="Try Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
          feature="Coming Soon"
        />
      </div>
    </div>
  );
};

export default Features;
