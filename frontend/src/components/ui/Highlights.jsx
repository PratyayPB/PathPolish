import React from "react";
import heroImage from "../../assets/highlightsHero.jpg";

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
          <img
            src={heroImage}
            alt="Highlights Hero Image"
            className="w-5/7 rounded-3xl"
          />

          <h2
            id="highlights-heading"
            className="text-2xl md:text-3xl font-extrabold text-white title-font leading-tight"
          >
            Numbers that showcase our success
          </h2>

          <p className="text-white body-font max-w-prose">
            Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget
            sollicitudin sit posuere augue vestibulum eget turpis lobortis donec
          </p>
        </div>

        <div className="flex gap-5 ">
          <div className="cards-left flex flex-col gap-4 pt-6">
            <div className="bg-[#3E3651] text-white rounded-xl shadow-md border border-transparent p-8  flex flex-col items-center text-center">
              <div className="text-3xl  font-bold">{cards[0].stat}</div>
              <div className="font-semibold body-font">{cards[0].title}</div>
              <p className="text-white font-light body-font">{cards[0].desc}</p>
            </div>
            <div className="bg-[#3E3651] text-white  rounded-xl shadow-md border border-transparent p-8  flex flex-col items-center text-center">
              <div className="text-3xl  font-bold">{cards[1].stat}</div>
              <div className="font-semibold body-font">{cards[1].title}</div>
              <p className="body-font font-light">{cards[1].desc}</p>
            </div>
          </div>

          <div className="cards-right flex flex-col gap-4">
            {cards.slice(2).map((c, idx) => (
              <article
                key={idx}
                className="bg-gray-200 rounded-xl shadow-md border border-transparent p-8  flex flex-col items-center text-center"
              >
                <div className="text-3xl font-bold text-[#3E3651]">
                  {c.stat}
                </div>
                <div className="font-semibold body-font text-[#3E3651] mt-1">
                  {c.title}
                </div>
                <p className="text-[#3E3651] body-font font-medium text-sm mt-2">
                  {c.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
