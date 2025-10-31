import React from "react";

const FeatureCard = ({ image, feature, description, cta }) => {
  return (
    <div className="flex flex-col justify-center gap-4 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={feature}
        width={80}
        height={60}
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold text-center">{feature}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <button className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition-colors">
        {cta}
      </button>
    </div>
  );
};

export default FeatureCard;
