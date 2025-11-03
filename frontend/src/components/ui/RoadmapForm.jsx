import React, { useState } from "react";
import axios from "axios";
const RoadmapForm = () => {
  const [formData, setFormData] = useState({
    duration: "",
    role: "",
  });

  const [responseData, setResponseData] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Roadmap Form Submitted:", formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/roadmap",
        formData
      );
      setResponseData(res.data);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
    
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 mb-40 bg-linear-to-b from-[#e6eefc] to-[#f4f8ff] p-8 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-1 font-orbitron">
        Roadmap Generation Form
      </h2>
      <p className="text-gray-600 mb-6">
        Provide your role and preferred learning duration to generate a
        customized roadmap.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g., Web Developer, Data Scientist, UI/UX Designer"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Duration (for learning)
          </label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option value="">Select Duration</option>
            <option value="1 month">1 Month</option>
            <option value="3 months">3 Months</option>
            <option value="6 months">6 Months</option>
            <option value="12 months">12 Months</option>
            <option value="Flexible">Flexible / Custom</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all font-medium"
          >
            Generate My Roadmap →
          </button>
        </div>
      </form>
      {/* Response Area */}
      {responseData && (
        <div className="mt-8 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">
            Your Customized Roadmap:
          </h3>
          <pre className="whitespace-pre-wrap text-gray-800">
            {responseData.roadmap}
          </pre>
        </div>
      )}
    </div>
  );
};

export default RoadmapForm;
