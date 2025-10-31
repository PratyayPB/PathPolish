import React from "react";

const cards = [
  {
    stat: "200+",
    title: "Websites build",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    featured: true,
  },
  {
    stat: "99%",
    title: "Client satisfaction",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    stat: "34+",
    title: "Team members",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    stat: "100+",
    title: "Amazing clients",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
];

export default function Highlights() {
  return (
    <section className="py-25 px-4" aria-labelledby="highlights-heading">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center py-10">
        <div className="space-y-4">
          <div className="w-11 h-11 flex items-center justify-center bg-white rounded-md shadow-sm">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width="21"
                height="21"
                rx="4"
                stroke="#E3E7EE"
                strokeWidth="1.2"
                fill="#FAFBFD"
              />
              <circle cx="8.5" cy="8.5" r="1.6" fill="#8F96A8" />
              <path d="M4 17l4.5-6 3.5 4.5L16 11l4 6H4z" fill="#CED6E6" />
            </svg>
          </div>

          <h2
            id="highlights-heading"
            className="text-2xl md:text-3xl font-semibold text-gray-700 leading-tight"
          >
            Numbers that showcase our success
          </h2>

          <p className="text-gray-500 max-w-prose">
            Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget
            sollicitudin sit posuere augue vestibulum eget turpis lobortis donec
          </p>
        </div>

        <div className="flex gap-5 ">
          <div className="cards-left flex flex-col gap-4 pt-6">
            <div className="bg-indigo-600 text-white rounded-xl shadow-md border border-transparent p-8  flex flex-col items-center text-center">
              <div className="text-3xl  font-bold">{cards[0].stat}</div>
              <div className="font-semibold ">{cards[0].title}</div>
              <p className="text-indigo-100 ">{cards[0].desc}</p>
            </div>
            <div className="bg-indigo-600  rounded-xl shadow-md border border-transparent p-8  flex flex-col items-center text-center">
              <div className="text-3xl  font-bold">{cards[1].stat}</div>
              <div className="font-semibold ">{cards[1].title}</div>
              <p className="">{cards[1].desc}</p>
            </div>
          </div>

          <div className="cards-right flex flex-col gap-4">
            {cards.slice(2).map((c, idx) => (
              <article
                key={idx}
                className="bg-gray-200 rounded-xl shadow-md border border-transparent p-8  flex flex-col items-center text-center"
              >
                <div className="text-3xl font-bold text-gray-700">{c.stat}</div>
                <div className="font-semibold text-sm text-gray-700 mt-1">
                  {c.title}
                </div>
                <p className="text-gray-400 text-sm mt-2">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
