import React, { useState } from "react";

const ResumeForm = () => {
  const [page, setPage] = useState(1);

  // Page 1 - Personal Details
  const [personal, setPersonal] = useState({
    fullName: "",
    contact: "",
    email: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    github: "",
    linkedin: "",
    portfolio: "",
    jobTitle: "",
  });

  // Page 2 - Education & Skills
  const [education, setEducation] = useState([
    { degree: "", institute: "", year: "" },
  ]);
  const [skills, setSkills] = useState([
    { name: "", details: "", mastery: "" },
  ]);

  // Page 3 - Experience & Summary
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    summary: "",
  });

  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => p - 1);

  const addEducation = () => {
    if (education.length < 4)
      setEducation([...education, { degree: "", institute: "", year: "" }]);
  };

  const addSkill = () => {
    if (skills.length < 15)
      setSkills([...skills, { name: "", details: "", mastery: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ personal, education, skills, experience });
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">
        Resume Builder
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Fill out your details to generate your professional resume
      </p>

      <form onSubmit={handleSubmit}>
        {/* PAGE 1: Personal Details */}
        {page === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={personal.fullName}
                onChange={(e) =>
                  setPersonal({ ...personal, fullName: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={personal.contact}
                onChange={(e) =>
                  setPersonal({ ...personal, contact: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={personal.email}
                onChange={(e) =>
                  setPersonal({ ...personal, email: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="City"
                value={personal.city}
                onChange={(e) =>
                  setPersonal({ ...personal, city: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="State"
                value={personal.state}
                onChange={(e) =>
                  setPersonal({ ...personal, state: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Country"
                value={personal.country}
                onChange={(e) =>
                  setPersonal({ ...personal, country: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Pincode"
                value={personal.pin}
                onChange={(e) =>
                  setPersonal({ ...personal, pin: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Job Title (Applying For)"
                value={personal.jobTitle}
                onChange={(e) =>
                  setPersonal({ ...personal, jobTitle: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
            </div>

            <input
              type="text"
              placeholder="GitHub (Optional)"
              value={personal.github}
              onChange={(e) =>
                setPersonal({ ...personal, github: e.target.value })
              }
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="LinkedIn (Optional)"
              value={personal.linkedin}
              onChange={(e) =>
                setPersonal({ ...personal, linkedin: e.target.value })
              }
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="Portfolio Website (Optional)"
              value={personal.portfolio}
              onChange={(e) =>
                setPersonal({ ...personal, portfolio: e.target.value })
              }
              className="border rounded-lg p-3 w-full"
            />
          </div>
        )}

        {/* PAGE 2: Education & Skills */}
        {page === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => {
                    const updated = [...education];
                    updated[i].degree = e.target.value;
                    setEducation(updated);
                  }}
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Institute"
                  value={edu.institute}
                  onChange={(e) => {
                    const updated = [...education];
                    updated[i].institute = e.target.value;
                    setEducation(updated);
                  }}
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => {
                    const updated = [...education];
                    updated[i].year = e.target.value;
                    setEducation(updated);
                  }}
                  className="border rounded-lg p-3"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Education
            </button>

            <h3 className="text-lg font-semibold text-gray-700 mt-6">Skills</h3>
            {skills.map((skill, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Skill Name"
                  value={skill.name}
                  onChange={(e) => {
                    const updated = [...skills];
                    updated[i].name = e.target.value;
                    setSkills(updated);
                  }}
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Skill Details"
                  value={skill.details}
                  onChange={(e) => {
                    const updated = [...skills];
                    updated[i].details = e.target.value;
                    setSkills(updated);
                  }}
                  className="border rounded-lg p-3"
                />
                <select
                  value={skill.mastery}
                  onChange={(e) => {
                    const updated = [...skills];
                    updated[i].mastery = e.target.value;
                    setSkills(updated);
                  }}
                  className="border rounded-lg p-3"
                >
                  <option value="">Select Mastery</option>
                  <option>Beginner</option>
                  <option>Amateur</option>
                  <option>Professional</option>
                </select>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkill}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Skill
            </button>
          </div>
        )}

        {/* PAGE 3: Work Experience */}
        {page === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Work Experience
            </h3>
            <input
              type="text"
              placeholder="Company Name"
              value={experience.company}
              onChange={(e) =>
                setExperience({ ...experience, company: e.target.value })
              }
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="Role / Position"
              value={experience.role}
              onChange={(e) =>
                setExperience({ ...experience, role: e.target.value })
              }
              className="border rounded-lg p-3 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) =>
                  setExperience({ ...experience, startDate: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) =>
                  setExperience({ ...experience, endDate: e.target.value })
                }
                className="border rounded-lg p-3 w-full"
              />
            </div>
            <textarea
              placeholder="Professional Summary (40-50 words)"
              value={experience.summary}
              onChange={(e) =>
                setExperience({ ...experience, summary: e.target.value })
              }
              className="border rounded-lg p-3 w-full"
              rows="4"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {page > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {page < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
