import React from "react";

const FeatureCard = ({ image, feature, description, cta }) => {
  return (
    <div className="flex flex-col justify-center gap-4 p-6 rounded-lg border border-[#3E3651] hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={feature}
        width={80}
        height={60}
        className="mx-auto"
      />
      <h3 className="text-xl font-bold text-center title-font text-[#3E3651]">
        {feature}
      </h3>
      <p className="text-white text-center body-font">{description}</p>
      <button className="bg-[#3E3651] p-3 rounded-md hover:bg-violet-800 text-white title-font transition-colors">
        {cta}
      </button>
    </div>
  );
};

export default FeatureCard;
