import React, { useState } from "react";
import api from "../../api/api";
import ReactMarkdown from "react-markdown";

const CareerAssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    interests: "",
    education: "",
    skills: "",
    goals: "",
    experience: "",
    currentRole: "",
    industry: "",
    country: "",
  });

  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true); // NEW

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseData(null);

    try {
      const res = await api.post(
        "/api/career-guide",
        formData
      );

      setResponseData(res.data);
      setShowForm(false); // HIDE FORM
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Please log in to use this feature.");
        window.location.href = "/login";
      }
      console.error("Error sending form data:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto bg-[#ebebeb] p-8 rounded-2xl shadow-md border border-gray-200">
        {/* ---------------- FORM SECTION ---------------- */}
        {showForm && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-1 font-orbitron">
              Career Assessment Form
            </h2>
            <p className="text-gray-600 mb-6">
              This information helps us provide more personalized career
              guidance.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

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
                <label className="block text-gray-700 font-medium mb-1">
                  Skills
                </label>
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
                <label className="block text-gray-700 font-medium mb-1">
                  Goals
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="Describe your short-term and long-term career goals..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="3"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., Internships, Projects, Jobs"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

              {/* Country */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="">Select your country</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all font-medium"
                >
                  Get My Personalized Guidance →
                </button>
              </div>
            </form>

            {isLoading && <p className="mt-4">Generating your guide...</p>}
          </>
        )}

        {/* ---------------- RESPONSE SECTION ---------------- */}
        {!showForm && responseData && (
          <div className="career-guide-response">
            <ReactMarkdown>{responseData.guide}</ReactMarkdown>

            {/* BACK BUTTON */}
            <button
              onClick={() => setShowForm(true)}
              className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerAssessmentForm;
