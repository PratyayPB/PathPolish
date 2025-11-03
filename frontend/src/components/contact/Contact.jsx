import React from "react";
import { Mail, Phone } from "lucide-react";
import Header from "../ui/Header";
const Contact = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 bg-white">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Let us know what <br /> you think!
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-gray-50">
              <Mail className="w-6 h-6 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-medium text-gray-800">
                  contact@pathpolish.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-gray-50">
              <Phone className="w-6 h-6 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Phone:</p>
                <p className="font-medium text-gray-800">(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full max-w-lg p-8 border rounded-lg shadow-sm bg-white">
          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="(123) 456 - 7890"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                placeholder="Type your message here..."
                rows="4"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-all"
            >
              Send message →
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
