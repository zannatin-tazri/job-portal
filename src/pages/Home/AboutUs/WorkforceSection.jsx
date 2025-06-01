import React, { useState } from "react";
import workerImage from "../../../assets/aboutus02.PNG";

const tabData = {
  "Instant Workforce": `
    Instant Workforce is a modern solution that connects businesses with skilled professionals on-demand,
    streamlining the hiring process. It provides immediate access to a pool of talent, enabling companies to
    address short-term projects, seasonal demands, or specialized tasks without the delays of traditional recruitment.
    This ensures flexibility, efficiency, and cost-effectiveness.
  `,
  "Plug-and-Play": `
    Our platform makes hiring as simple as plugging in a new team member. With instant onboarding and seamless
    integration, businesses can rapidly scale teams without operational overhead or lengthy training.
  `,
  "Cost Efficient": `
    Save on recruitment and training costs with a ready-to-work talent pool. Instant Workforce eliminates
    the need for long hiring cycles, ensuring better ROI on human capital investments.
  `,
  "Scalable": `
    Whether you're a startup or an enterprise, scale your workforce up or down based on project needs.
    Our system is designed to grow with your business without sacrificing quality or speed.
  `,
  "Quality": `
    Quality is our top priority. Every professional is vetted to ensure they meet your standards.
    You get the right talent with the right skills, ready to contribute from day one.
  `
};

const WorkforceSection = () => {
  const [activeTab, setActiveTab] = useState("Instant Workforce");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-6 py-10 md:py-16 bg-white">
      {/* Left Section */}
      <div className="rounded-2xl p-4 md:p-8 md:w-1/2 flex flex-col items-center text-center">
        <img
          src={workerImage}
          alt="Happy worker"
          className="w-full max-w-md md:max-w-full h-auto object-contain mb-6 rounded-2xl"
        />
      </div>

      {/* Right Section with Tabs */}
      <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 w-full md:w-1/2 h-auto">
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-4">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`btn px-3 py-2 text-xs sm:text-sm md:text-base rounded-lg transition duration-300 ${
                activeTab === tab
                  ? "bg-purple-500 text-white"
                  : "bg-purple-200 hover:bg-purple-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line max-h-[300px] md:max-h-[380px] overflow-y-auto">
          {tabData[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default WorkforceSection;
