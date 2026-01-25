import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Software Engineer at TechCorp",
    stars: 5,
    quote: "Landed my dream job!",
    text: "PathPolish's roadmap generator gave me a clear structure to follow. The interview simulator was a game changer - I felt so confident walking into my interviews!",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateHub",
    stars: 5,
    quote: "Invaluable career guidance",
    text: "I was stuck in my career and didn't know how to move forward. The career assessment tool helped me identify my strengths and pivot to product management seamlessly.",
  },
  {
    name: "David Kim",
    role: "Computer Science Student",
    stars: 5,
    quote: "Best platform for students",
    text: "The step-by-step roadmaps helped me learn MERN stack from scratch. The resources are curated perfectly, saving me hours of searching for the right tutorials.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold title-font text-[#3E3651] mb-4">
            What our clients have to say
          </h2>
          <p className="text-gray-600 body-font text-sm md:text-base">
            See how PathPolish has transformed careers and helped individuals achieve their professional goals.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
            {/* Left - Avatar placeholder */}
            <div className="w-full md:w-1/3 bg-gray-50 rounded-xl flex items-center justify-center min-h-[200px] md:min-h-auto">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center md:justify-start">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <h3 className="text-xl md:text-2xl font-extrabold title-font text-[#3E3651] mb-4 text-center md:text-left">
                "{testimonials[currentIndex].quote}"
              </h3>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-8 body-font text-center md:text-left">
                {testimonials[currentIndex].text}
              </p>

              {/* Author Info */}
              <div className="text-center md:text-left">
                <p className="font-semibold text-gray-800 body-font">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-500 body-font">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={previousTestimonial}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600 cursor-pointer" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600 cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
