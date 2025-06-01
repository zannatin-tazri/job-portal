import React from "react";
import aboutImage from "../../../assets/aboutus.PNG"; // Ensure correct path
import { FaChartLine, FaMoneyBillWave, FaBullseye } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-10 md:py-16 gap-8 md:gap-10">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800">About Us</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          FlexWork offers flexible working hours, designed for growing businesses and
          driven freelance professionals. We bridge the gap between opportunity and flexibility.
          For small and mid-sized companies, finding the right talent no longer means stretching budgets
          or compromising timelines—our platform delivers expert resources on demand, whether it’s for
          a few hours or a few days.
        </p>

        {/* Features */}
        <div className="space-y-4">
          {/* Feature 1 */}
          <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
            <div className="text-white bg-indigo-500 p-2 rounded-full">
              <FaChartLine className="text-lg sm:text-xl" />
            </div>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              <strong>Efficient:</strong> Businesses can hire pre-vetted, highly skilled professionals
              instantly through our plug-and-play resources.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
            <div className="text-white bg-yellow-400 p-2 rounded-full">
              <FaMoneyBillWave className="text-lg sm:text-xl" />
            </div>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              <strong>Cost-Effective:</strong> Why pay for long-term commitments when you only need expertise
              for a specific project?
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
            <div className="text-white bg-green-500 p-2 rounded-full">
              <FaBullseye className="text-lg sm:text-xl" />
            </div>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              <strong>Impactful:</strong> We’re here to solve problems, empower businesses,
              and create opportunities for individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="w-full max-w-md md:max-w-full overflow-hidden p-2 sm:p-4">
          <img
            src={aboutImage}
            alt="About FlexWork"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
