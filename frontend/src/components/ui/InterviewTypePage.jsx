import React from "react";
import InterviewTypeCard from "./InterviewTypeCard";
import { useState, useEffect } from "react";
import axios from "axios";

const InterviewTypePage = () => {
  const [interviewTypes, setInterviewTypes] = useState([]);

  useEffect(() => {
    try {
      const fetchInterviewTypes = async () => {
        const response = await axios.get(
          "http://localhost:5000/api/interview/types",
          {
            withCredentials: true,
          },
        );
        const data = response.data.data;
        setInterviewTypes(data);
      };
      fetchInterviewTypes();
    } catch (error) {
      console.error("Error fetching interview types:", error);
    }
  }, []);
  console.log(interviewTypes);

  // const interviewTypes = [
  //   {
  //     title: "Technical",
  //     level: "Advanced",
  //     description: "Practice coding problems and technical concepts",
  //     duration: "45–60 min",
  //     questions: "25 questions",
  //     color: "blue",
  //   },
  //   {
  //     title: "Behavioral",
  //     level: "Intermediate",
  //     description: "STAR method and soft skills assessment",
  //     duration: "30–45 min",
  //     questions: "15 questions",
  //     color: "green",
  //   },
  //   {
  //     title: "SystemDesign",
  //     level: "Expert",
  //     description: "Architecture and scalability discussions",
  //     duration: "60–90 min",
  //     questions: "8 questions",
  //     color: "red",
  //   },
  //   {
  //     title: "CaseStudy",
  //     level: "Advanced",
  //     description: "Business scenarios and problem-solving",
  //     duration: "45–60 min",
  //     questions: "12 questions",
  //     color: "purple",
  //   },
  // ];

  return (
    <div className=" py-20  px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 font-orbitron">
          Choose Your Interview Type
        </h1>
        <p className="text-gray-600 mb-10">
          Practice with different interview formats tailored to your industry
          and role.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {interviewTypes.map((type, index) => (
            <InterviewTypeCard key={index} {...type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewTypePage;
