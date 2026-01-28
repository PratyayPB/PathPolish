import React, { useState } from "react";
import axios from "axios";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Link } from "react-router-dom";
import bg from "../../assets/background.png";
const BlogManagement = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate form data
    if (!formData.title.trim()) {
      setError("Blog title is required");
      return;
    }
    if (!formData.content.trim()) {
      setError("Blog content is required");
      return;
    }
    if (!formData.author.trim()) {
      setError("Author name is required");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/blogs", {
        title: formData.title,
        content: formData.content,
        author: formData.author,
      });

      if (response.status === 201 || response.status === 200) {
        // 
        setSuccess("Blog created successfully!");

        // Reset form
        resetForm();

        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(""), 3000);
      }
    } catch (err) {
      console.error("Error creating blog:", err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to create blog. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      author: "",
    });
  };

  return (
    <>
      <Header />
      <div
        className="space-y-6 py-30 bg-cover bg-center flex flex-col "
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* <h1 className="text-3xl font-bold mb-8">Blog Management</h1> */}

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Blog Form */}
        <div className="bg-white py-8 px-10 mx-30 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-6">Create New Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter blog title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Enter author name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Enter blog content"
                rows="8"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Creating Blog..." : "Create Blog"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogManagement;
