import React, { useState } from "react";

const CareerAssessmentForm = () => {
  const [formData, setFormData] = useState({
    interests: "",
    education: "",
    skills: "",
    goals: "",
    currentRole: "",
    industry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate your backend or AI API call here
  };

  return (
    <div className="max-w-2xl mx-auto my-40  bg-linear-gradient-to-b from-[#e6eefc] to-[#f4f8ff] p-8 rounded-2xl shadow-md border border-gray-200 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-1 font-orbitron">
        Career Assessment Form
      </h2>
      <p className="text-gray-600 mb-6">
        This information helps us provide more personalized career guidance.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Interests */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Interests
          </label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., Design, AI, Web Development"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Education
          </label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="e.g., B.Sc in Computer Science, MBA"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., JavaScript, React, SEO"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Goals */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Goals</label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="Describe your short-term and long-term career goals..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
          />
        </div>

        {/* Current Role */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Current Role
          </label>
          <input
            type="text"
            name="currentRole"
            value={formData.currentRole}
            onChange={handleChange}
            placeholder="e.g., Student, Software Developer, Analyst"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Industry
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option value="">Select your industry</option>
            <option value="IT">Information Technology</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all font-medium"
          >
            Get My Personalized Guidance →
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerAssessmentForm;
