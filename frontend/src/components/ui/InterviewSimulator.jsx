import React, { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

const InterviewSimulator = () => {
  const [activeTab, setActiveTab] = useState("Technical");
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = {
    Technical: [
      "Explain the difference between synchronous and asynchronous programming.",
      "What is a REST API and how does it work?",
      "Explain event delegation in JavaScript.",
      "What are closures in JavaScript?",
    ],
    Behavioral: [
      "Tell me about a time you faced a challenge and how you overcame it.",
      "How do you handle feedback from your team?",
      "Describe a time when you had to meet a tight deadline.",
      "How do you manage conflicts at work?",
    ],
  };

  const currentQuestions = questions[activeTab];
  const currentQuestion = currentQuestions[questionIndex];

  const handleNext = () => {
    if (questionIndex < currentQuestions.length - 1)
      setQuestionIndex(questionIndex + 1);
  };

  const handlePrevious = () => {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  };

  const handleReset = () => {
    setQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f8ff] to-[#e6eefc] pt-30 px-6">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-2">
          Practice Mock Interview
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Experience a realistic interview environment with our interactive
          platform.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-6 bg-gray-100 rounded-full">
          <button
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === "Technical"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("Technical")}
          >
            Technical Questions
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === "Behavioral"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("Behavioral")}
          >
            Behavioral Questions
          </button>
        </div>

        {/* Question Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg text-gray-800">
              {activeTab} Interview Practice
            </h2>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              Question {questionIndex + 1} of {currentQuestions.length}
            </span>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-6">
            <p className="font-semibold text-gray-900 mb-2">
              Interview Question:
            </p>
            <p className="text-gray-600">{currentQuestion}</p>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={questionIndex === 0}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md font-medium disabled:opacity-50"
            >
              Previous Question
            </button>

            <div className="flex gap-3 items-center">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition-all">
                <Play size={16} /> Start Recording
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-md font-medium hover:bg-gray-200 transition-all"
              >
                <RotateCcw size={16} /> Reset
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={questionIndex === currentQuestions.length - 1}
              className="px-4 py-2 bg-gray-800 text-white rounded-md font-medium disabled:opacity-50 hover:bg-gray-900 transition-all"
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSimulator;
