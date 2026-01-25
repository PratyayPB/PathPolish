import React, { useState } from "react";

const faqsData = [
  {
    q: "How does the roadmap generator work?",
    a: "Our AI analyzes your career goals and current skills to create a personalized step-by-step learning path. It breaks down complex topics into manageable modules with curated resources.",
  },
  {
    q: "Is the interview simulator effective?",
    a: "Yes! Our simulator uses advanced AI to mimic real interview scenarios. You get instant feedback on your answers, communication style, and technical accuracy to help you improve.",
  },
  {
    q: "Can I access PathPolish on mobile?",
    a: "Absolutely. PathPolish is fully responsive and optimized for mobile devices, so you can learn and practice on the go.",
  },
  {
    q: "Do you offer mentorship?",
    a: "Yes, our Premium plan includes 1-on-1 mentorship sessions with industry experts who can guide you through your career challenges.",
  },
];

// const tabs = ["General", "Billing", "Support", "Product"];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // const [activeTab, setActiveTab] = useState(tabs[0]);

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
            Everything you need to know about PathPolish and how we help you succeed.
          </p>

          {/* Tabs / categories */}
          {/* <nav className="w-full mt-8">
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
          </nav> */}
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
