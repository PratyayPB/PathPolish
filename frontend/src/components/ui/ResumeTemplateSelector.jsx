import React from "react";
import { ArrowRight, FileText, Layout, PenTool, Layers } from "lucide-react";

const ResumeTemplateSelector = () => {
  const templates = [
    {
      title: "Modern Template",
      description:
        "A sleek and minimal layout perfect for tech and creative professionals.",
      icon: <Layout size={42} className="text-indigo-400" />,
    },
    {
      title: "Professional Template",
      description:
        "A structured design emphasizing experience and achievements.",
      icon: <FileText size={42} className="text-indigo-400" />,
    },
    {
      title: "Creative Template",
      description:
        "Showcase your design skills with a stylish and visual-first format.",
      icon: <PenTool size={42} className="text-indigo-400" />,
    },
    {
      title: "Elegant Template",
      description:
        "A balanced, classy design suited for formal industries and roles.",
      icon: <Layers size={42} className="text-indigo-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 pt-40 pb-10">
      <div className="max-w-6xl text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Browse Our Set of Templates
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Choose from a collection of stunning, ATS-friendly templates to make
          your resume stand out effortlessly.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer p-10 flex flex-col items-start text-left"
            >
              <div className="mb-6">{template.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                {template.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {template.description}
              </p>
              <button className="text-indigo-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplateSelector;
