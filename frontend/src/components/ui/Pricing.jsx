import React, { useState, forwardRef } from "react";
import { CheckCircle } from "lucide-react";

const Pricing = forwardRef((props, ref) => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: billing === "monthly" ? "₹0" : "₹0",
      description:
        "Perfect for students and beginners starting their journey.",
      features: [
        "Access to basic roadmaps",
        "Community support",
        "Limited interview questions",
        "Basic career assessment",
        "Blog access",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: billing === "monthly" ? "₹499" : "₹4,999",
      description:
        "For serious job seekers who want to accelerate their career.",
      features: [
        "Everything in Starter",
        "Unlimited roadmap generation",
        "AI Interview Simulator (10/mo)",
        "Resume analysis tool",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: billing === "monthly" ? "₹999" : "₹9,999",
      description:
        "Comprehensive guidance for career transformation.",
      features: [
        "Everything in Pro",
        "Unlimited AI Interviews",
        "1-on-1 Mentorship session",
        "Personalized career strategy",
        "Dedicated success manager",
      ],
      popular: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="pricing"
      className="py-20  scroll-mt-20 bg-gray-400/50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <h4 className="text-sm tracking-wider text-[#3E3651] font-black body-font uppercase">
            Pricing
          </h4>
          <h2 className="text-4xl font-extrabold text-white title-font mt-2">
            Affordable pricing plans
          </h2>
          <p className="text-white body-font leading-relaxed mt-4 max-w-2xl mx-auto">
            Choose the perfect plan to unlock your potential. Upgrade anytime as your career grows.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition  ${
              billing === "monthly"
                ? "bg-[#3E3651] text-white "
                : "bg-white text-[#3E3651] border border-gray-200 hover:bg-gray-200"
            }`}
          >
            Monthly plan
          </button>
          <button
            onClick={() => setBilling("annual")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              billing === "annual"
                ? "bg-[#3E3651] text-white"
                : "bg-white text-[#3E3651]  border border-gray-200 hover:bg-gray-200"
            }`}
          >
            Annual plan
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-sm border ${
                plan.popular
                  ? "bg-[#3E3651] text-white border-violet-800"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold body-font ">{plan.name}</h3>
                {plan.popular && (
                  <span className="bg-white text-[#3E3651] text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm font-medium ml-1">/month</span>
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  plan.popular ? "text-indigo-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <hr
                className={`my-6 ${
                  plan.popular ? "border-indigo-400" : "border-gray-200"
                }`}
              />

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 body-font">
                    <CheckCircle
                      className={`w-5 h-5 ${
                        plan.popular ? "text-white" : "text-indigo-600"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition body-font ${
                  plan.popular
                    ? "bg-white text-[#3E3651] hover:bg-indigo-100"
                    : "bg-[#3E3651] text-white hover:bg-violet-800"
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Pricing;
