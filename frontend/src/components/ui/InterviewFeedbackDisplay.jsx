import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Plugin to support GitHub Flavored Markdown (like tables and strikethroughs)

// Define custom Tailwind styles for the Markdown elements
const components = {
  h2: ({ node, ...props }) => (
    <h2
      className="text-2xl font-bold mt-6 mb-3 text-gray-800 border-b pb-1"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-700" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />
  ),
  li: ({ node, ...props }) => <li className="text-gray-600" {...props} />,
  strong: ({ node, ...props }) => (
    <strong className="font-extrabold text-gray-900" {...props} />
  ),
  hr: ({ node, ...props }) => (
    <hr className="my-6 border-gray-200" {...props} />
  ),
  // Optional: Add custom styles for blockquotes or code blocks if needed
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-blue-400 pl-4 italic text-gray-500 my-4"
      {...props}
    />
  ),
};

const FeedbackDisplay = ({ feedbackString }) => {
  if (!feedbackString) {
    return (
      <div className="p-6 bg-yellow-50 text-yellow-700 rounded-lg">
        No feedback available yet. Please submit your responses.
      </div>
    );
  }

  return (
    <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
        Interview Feedback Report 📝
      </h1>
      <hr className="mb-6 border-blue-100" />

      {/* The ReactMarkdown component parses the markdown string 
        and converts it to styled HTML elements based on the components object.
      */}
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {feedbackString}
      </ReactMarkdown>
    </div>
  );
};

export default FeedbackDisplay;
