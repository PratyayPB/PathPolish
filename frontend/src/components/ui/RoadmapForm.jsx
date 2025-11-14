import React, { useState, useEffect } from "react";
import axios from "axios";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "inter",
});

const RoadmapForm = () => {
  const [formData, setFormData] = useState({
    duration: "",
    role: "",
  });
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  // const [dbStore, setDbStore] = useState({
  //   role: "",
  //   duration: "",
  //   mermaidCode: "",
  // });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setDbStore({ ...dbStore, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Roadmap Form Submitted;Please wait for the Roadmap!", formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/roadmap",
        formData
      );
      setResponseData(res.data.mermaidCode);
      // setDbStore({ ...dbStore, mermaidCode: res.data.mermaidCode });
      // const sendToDB = await axios.post(
      //   "http://localhost:5000/api/roadmap/save",
      //   dbStore
      // );
      // if (sendToDB.status === 200) {
      //   console.log("Data saved to the database successfully.");
      // } else {
      //   console.error("Failed to save data to the database.");
      // }

      // console.log("Server response:", dbStore);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Please log in to use this feature.");
        window.location.href = "/login";
      }
      console.error("Error sending form data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!responseData) return;
    const renderDiagram = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, responseData);
        setSvg(svg);
      } catch (err) {
        console.error("Error rendering Mermaid diagram:", err);
        setError(err.message);
      }
    };
    renderDiagram();
  }, [responseData]);

  return (
    <div className="py-30">
      <div className="max-w-4xl mx-auto bg-[#ebebeb]    p-8 rounded-2xl shadow-md border border-gray-100">
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
              <option value="2 years +">2 Years +</option>
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
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Your Roadmap:</h3>
              {svg && !error && (
                <button
                  onClick={() => {
                    const blob = new Blob([svg], { type: "image/svg+xml" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `roadmap-${formData.role
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.svg`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download SVG
                </button>
              )}
            </div>

            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div
                className="overflow-auto"
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapForm;
