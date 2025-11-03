import React, { useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import FeedbackDisplay from "./InterviewFeedbackDisplay";

// Assuming you have imported axios, Play, and RotateCcw
// import axios from 'axios';
// import { Play, RotateCcw } from 'lucide-react';

const InterviewSimulator = () => {
  // 1. SIMPLIFIED STATE
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]); // Now an array []
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/interview/questions"
        );
        // 3. SIMPLIFIED FETCH LOGIC: Set the fetched array directly
        setQuestions(response.data.questions);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch questions");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // 4. SIMPLIFIED RENDERING LOGIC
  const currentQuestions = questions; // Use the questions array directly
  const currentQuestion = currentQuestions[questionIndex] || "";

  const handleNext = () => {
    if (questionIndex < currentQuestions.length - 1)
      setQuestionIndex(questionIndex + 1);
  };

  const handlePrevious = () => {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  };

  const handleReset = () => {
    setQuestionIndex(0);
    setResponses([]);
  };

  // Update user response for the current question
  const handleResponseChange = (e) => {
    const updatedResponses = [...responses];
    const responseIndex = updatedResponses.findIndex(
      (r) => r.question === currentQuestion
    );

    if (responseIndex !== -1) {
      updatedResponses[responseIndex].response = e.target.value;
    } else {
      updatedResponses.push({
        question: currentQuestion,
        response: e.target.value,
      });
    }

    setResponses(updatedResponses);
  };

  const getCurrentResponse = () => {
    const match = responses.find((r) => r.question === currentQuestion);
    return match ? match.response : "";
  };

  const handleSubmit = async () => {
    alert("Responses submitted successfully!Waiting for Feedback...");
    const payload = { responses };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/interview/feedback",
        payload
      );
      setFeedback(res.data.feedback);
      alert("Feedback Ready!");
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("Error submitting responses");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f8ff] to-[#e6eefc] pt-30 px-6">
      {feedback ? (
        // 🌟 SHOW FEEDBACK DISPLAY 🌟
        <FeedbackDisplay feedbackString={feedback} />
      ) : (
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
          <h1 className="text-3xl font-bold text-center mb-2">
            Practice Mock Interview
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Experience a realistic interview environment with our interactive
            platform.
          </p>

          {/* 2. REMOVED TABS JSX */}

          {/* Question Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg text-gray-800">
                Interview Practice
              </h2>
              {/* Display "Question X of Y" only if questions are loaded */}
              {currentQuestions.length > 0 && (
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  Question {questionIndex + 1} of {currentQuestions.length}
                </span>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <p className="font-semibold text-gray-900 mb-2">
                Interview Question:
              </p>
              {/* Display the current question */}
              <p className="text-gray-600 mb-4">{currentQuestion}</p>

              <textarea
                value={getCurrentResponse()}
                onChange={handleResponseChange}
                placeholder="Type your response here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows={4}
              ></textarea>
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

              {/* Conditional Next/Submit button logic is unchanged and still works! */}
              {questionIndex === currentQuestions.length - 1 &&
              currentQuestions.length > 0 ? (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-all"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={currentQuestions.length === 0} // Added safeguard
                  className="px-4 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition-all"
                >
                  Next Question
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewSimulator;
