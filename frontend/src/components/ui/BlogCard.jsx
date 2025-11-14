import React from "react";
import { Image } from "lucide-react";
import HeroImage from "../../assets/blogArticleHero.jpg";

const BlogCard = ({ title, content, author, published_date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-5 w-full max-w-sm cursor-pointer hover:scale-150">
      {/* Image Placeholder */}
      <div className="flex justify-center items-center  rounded-lg h-32 mb-4">
        <img src={HeroImage} alt="" className="w-3/5 rounded-md" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-5">{content}</p>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm mt-4">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">
            {author}
          </span>
          <span className="text-gray-500">{published_date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
