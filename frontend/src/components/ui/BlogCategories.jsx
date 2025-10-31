import React, { useState } from "react";

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Design", "Frontend", "Career", "AI", "UX"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>

      {/* Categories */}
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-gray-700 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
