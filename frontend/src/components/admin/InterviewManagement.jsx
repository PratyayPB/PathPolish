import React, { useState } from "react";
import api from "../../api/api";
import bg from "../../assets/background.png";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
const InterviewManagement = () => {
  const [typeFormData, setTypeFormData] = useState({
    type_name: "",
    description: "",
  });
  const [questionsFormData, setQuestionsFormData] = useState({
    type_name: "",
    question_text: Array(10).fill(""),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form handlers
  const handleTypeInputChange = (e) => {
    const { name, value } = e.target;
    setTypeFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questionsFormData.question_text];
    newQuestions[index] = value;
    setQuestionsFormData((prev) => ({
      ...prev,
      question_text: newQuestions,
    }));
  };

  // Form handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that at least the type_name is filled
    if (!typeFormData.type_name.trim()) {
      setError("Interview Type name is required");
      return;
    }

    // Validate that at least one question is filled
    const hasQuestions = questionsFormData.question_text.some((q) => q.trim());
    if (!hasQuestions) {
      setError("At least one question is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Step 1: Create Interview Type
      const typeRes = await api.post(
        "/api/interview/createInterviewType",
        typeFormData,
      );

      if (typeRes.status === 201) {
        // Step 2: Create Interview Questions with the type_name from typeFormData
        const questionsPayload = {
          type_name: typeFormData.type_name,
          question_text: questionsFormData.question_text.filter((q) =>
            q.trim(),
          ), // Only send non-empty questions
        };

        try {
          const questionRes = await api.post(
            "/api/interview/createInterviewQuestion",
            questionsPayload,
          );

          if (questionRes.status === 201) {
            alert("Interview Type and Questions created successfully!");

            // Reset form
            setTypeFormData({ type_name: "", description: "" });
            setQuestionsFormData({
              type_name: "",
              question_text: Array(10).fill(""),
            });
          }
        } catch (error) {
          console.error("Error creating interview questions:", error);
          setError(
            "Error creating questions: " +
              (error.response?.data?.message || error.message),
          );
        }
      }
    } catch (error) {
      console.error("Error creating interview type:", error);
      setError(
        "Error creating interview type: " +
          (error.response?.data?.message || error.message),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="space-y-6 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Interview Types Section */}
        <div className=" p-6 rounded-lg shadow">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border-2 border-[#3E3651] rounded-xl mx-40 my-30 px-20 py-20 flex flex-col bg-white"
          >
            <h2 className="text-xl font-semibold mb-4">
              Create Interview Type & Questions
            </h2>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {/* Interview Type Section */}
            <div className="mb-6 pb-6 border-b-2">
              <h3 className="text-lg font-semibold mb-4">
                Interview Type Details
              </h3>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Interview Type Name
                </label>
                <input
                  type="text"
                  name="type_name"
                  placeholder="e.g., Technical, HR, Behavioral"
                  value={typeFormData.type_name}
                  onChange={handleTypeInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe this interview type..."
                  value={typeFormData.description}
                  onChange={handleTypeInputChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                />
              </div>
            </div>

            {/* Questions Section */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-10">
              <h2 className="text-lg font-semibold mb-4">
                Interview Questions (Max 10)
              </h2>

              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium mb-2">
                      Question {index + 1}
                    </label>
                    <textarea
                      placeholder={`Enter question ${index + 1}`}
                      value={questionsFormData.question_text[index]}
                      onChange={(e) =>
                        handleQuestionChange(index, e.target.value)
                      }
                      className="w-full p-2 border rounded"
                      rows="2"
                    />
                  </div>
                ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`mt-6 px-6 py-3 rounded font-semibold text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Creating..." : "Create Interview Type & Questions"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterviewManagement;
