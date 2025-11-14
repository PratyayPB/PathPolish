import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogCard from "../ui/BlogCard";

const BlogsExplore = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");

        // Add slug to each blog
        const updatedBlogs = response.data.map((blog) => ({
          ...blog,
          slug: slugify(blog.title),
        }));

        setBlogs(updatedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-6 flex flex-col items-center gap-4 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Explore Our Latest Blogs
        </h2>
        <p className="text-gray-500">
          Stay updated with insights, tutorials, and trends from the world of
          web design and AI.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogs.slice(0, visibleCount).map((blog) => (
            <BlogCard {...blog} />
          ))}
        </div>

        {visibleCount < blogs.length && (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 my-4 cursor-pointer border border-gray-400 rounded-md hover:bg-gray-100 transition"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogsExplore;
