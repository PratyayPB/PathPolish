import React, { useState } from "react";

const faqsData = [
  {
    q: "How long does a web design project take?",
    a: "Project length depends on scope. A simple brochure site can take a few weeks; a larger custom site with integrations can take several months. We define milestones and keep communication open throughout.",
  },
  {
    q: "What factors affect the cost of web design?",
    a: "Costs depend on design complexity, number of pages, custom functionality, integrations (payments, CMS, APIs), and content creation. Ongoing maintenance and hosting are additional factors.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes — we offer maintenance and support plans to keep your site secure, up to date, and to add incremental improvements over time.",
  },
  {
    q: "What is your web design process?",
    a: "Our process typically includes discovery, wireframes, visual design, development, testing, and launch. We collaborate closely at each step to make sure the outcome meets goals.",
  },
];

const tabs = ["General", "Billing", "Support", "Product"];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Header / Intro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-3 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold title-font ">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-center body-font font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>

          {/* Tabs / categories */}
          <nav className="w-full mt-8">
            <ul className="flex justify-center gap-8 border-b">
              {tabs.map((t) => (
                <li
                  key={t}
                  className={`py-3 font-medium body-font text-[#3E3651] cursor-pointer text-sm ${
                    activeTab === t ? "border-b-2" : ""
                  }`}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* FAQ list — center column spans */}
        <div className="md:col-span-3">
          <div className="max-w-3xl mx-auto grid gap-4 mt-8">
            {faqsData.map((f, i) => {
              const open = openIndex === i;
              return (
                <article
                  key={f.q}
                  className={`rounded-lg border overflow-hidden transition-shadow ${
                    open ? "shadow-md" : ""
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium body-font">{f.q}</span>
                    <span className="ml-4 text-xl cursor-pointer">
                      {open ? "✕" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`${
                      open ? "block" : "hidden"
                    } p-4 border-t text-sm body-font`}
                  >
                    {f.a}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
