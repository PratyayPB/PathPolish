import React from "react";
import { Clock, MessageSquare } from "lucide-react";

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
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            level === "Expert"
              ? "bg-red-100 text-red-600"
              : level === "Advanced"
              ? "bg-blue-100 text-blue-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {level}
        </span>
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

      <button
        className={`w-full text-center py-2 rounded-md font-medium ${
          color
            ? `bg-${color}-600 hover:bg-${color}-700 text-white`
            : "bg-gray-800 hover:bg-gray-900 text-white"
        } transition-all`}
      >
        Start Practice →
      </button>
    </div>
  );
};

export default InterviewTypeCard;
