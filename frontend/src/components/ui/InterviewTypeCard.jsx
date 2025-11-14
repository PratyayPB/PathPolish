import React from "react";
import { Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const InterviewTypeCard = ({
  title,
  level,
  description,
  duration,
  questions,
  color,
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-64">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span>{level}</span>
      </div>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
        <div className="flex items-center gap-1">
          <Clock size={16} /> <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare size={16} /> <span>{questions}</span>
        </div>
      </div>

      <button className={`w-full text-center py-2 rounded-md font-medium `}>
        <Link to={`/interview/${title}`}>Start Practice </Link> →
      </button>
    </div>
  );
};

export default InterviewTypeCard;
