import React from "react";
import { Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const handleSectionNavigation = (sectionId,type_name) => {
    if (location.pathname !== `/interview/${type_name}`) {
      navigate(`/interview/${type_name}`, { state: { fromHeader: true, scrollTo: sectionId } });
    } else {
      
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

const InterviewTypeCard = ({
  type_name,
  description,
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-64 ">
      <div className="flex flex-col gap-2 items-center justify-between ">
        <h3 className="text-lg font-semibold text-gray-800">{type_name}</h3>
        {/* <span>{level}</span> */}
        <p className="text-gray-600 text-sm mb-2">{description}</p>
      </div>

      

      {/* <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
        <div className="flex items-center gap-1">
          <Clock size={16} /> <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare size={16} /> <span>{questions}</span>
        </div>
      </div> */}

      <button className={`px-4 text-center  rounded-md font-medium bg-[#3E3651] text-white py-1 hover:bg-violet-800 transition-all `} onClick={() => handleSectionNavigation('interview-simulator',type_name)}  >
        <Link to={`/interview/${type_name}`}>Start Practice </Link> →
      </button>
    </div>
  );
};

export default InterviewTypeCard;
