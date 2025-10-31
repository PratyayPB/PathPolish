import React from "react";
import { Image } from "lucide-react";

const BlogCard = ({ title, description, category, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-5 w-full max-w-sm cursor-pointer">
      {/* Image Placeholder */}
      <div className="flex justify-center items-center bg-gray-50 rounded-lg h-32 mb-4">
        <Image size={40} className="text-gray-400" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm mt-4">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">
            {category}
          </span>
          <span className="text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
