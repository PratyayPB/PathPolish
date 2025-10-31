import React from "react";

export default function HeroTemplate2() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl min-h-screen pt-30 mx-auto items-center">
        {/* Left card */}
        <div className=" absolute mt-10 ml-10 max-w-xl">
          <div className="bg-gray-100 rounded-lg px-15 py-15 shadow-sm border border-gray-200 flex flex-col gap-2">
            <h2 className=" text-2xl md:text-4xl font-bold text-[#6f7386] leading-tight">
              Stay ahead of the curve
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              magni? Dolorem sequi, omnis error cum fugiat, obcaecati culpa
              asperiores, dolorum repellendus id ut!
            </p>
          </div>
        </div>

        {/* Right large colored area with icon */}
        <div className="md:col-span-6 ml-70">
          <div className="h-72 md:h-80 bg-rose-300 rounded-lg flex items-center justify-around pl-60">
            <div className="w-22 h-22 bg-white rounded-md shadow-md flex items-center justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="3"
                  fill="#F3F6FA"
                  stroke="#CBD5E1"
                />
                <path
                  d="M7 15l3-4 4 5 3-3 2 3"
                  stroke="#6B7280"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
