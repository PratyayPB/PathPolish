import React from "react";
import { Users, FileText } from "lucide-react";

const ResumeModuleSelector = () => {
  const modules = [
    {
      title: "Resume Builder",
      icon: <FileText size={40} className="text-indigo-400" />,
      description: "Create professional resumes and CVs instantly.",
    },
    {
      title: "Resume Feedback",
      icon: <Users size={40} className="text-indigo-400" />,
      description: "Get AI-powered suggestions and feedback.",
    },
  ];

  return (
    <div className=" bg-white flex flex-col justify-center items-center px-6 pt-10 pb-20">
      <div className="max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Browse Our Resume Features
        </h2>
        <p className="text-gray-500 mb-12">
          Build, polish, and perfect your professional profile with AI-powered
          tools.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer p-10 flex flex-col items-center text-center"
            >
              <div className="mb-4">{module.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600 text-sm">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeModuleSelector;
