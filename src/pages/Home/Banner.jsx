import React, { useEffect, useState } from 'react';
import { easeOut, motion } from "framer-motion";
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="hero shadow-2xl shadow-purple-200 bg-base-200 min-h-[30rem]">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 px-4 sm:px-6 md:px-10 lg:px-28">

        {/* Right Section - Images */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <motion.img
            src={team2}
            animate={isMobile ? { y: [0, 20, 0] } : { y: [5, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-52 sm:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-indigo-500 shadow-2xl"
          />
          <motion.img
            src={team1}
            animate={isMobile ? { y: [0, 20, 0] } : { x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="w-52 sm:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-indigo-500 shadow-2xl"
          />
        </div>

        {/* Left Section - Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            animate={{ x: 50 }}
            transition={{ duration: 2, delay: 1, ease: easeOut }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold"
          >
            Welcome to the <br />
            <motion.span
              animate={{ color: ['#DDA0DD', '#4B0082'] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              Hunt For Hire
            </motion.span>
          </motion.h1>

          <p className="py-4 sm:ms-10 px-4 text-purple-950 font-semibold text-base sm:text-lg lg:text-xl">
            Join with us to discover your perfect job or the right talent to hire.
          </p>

          <button className="sm:ms-12 btn btn-primary bg-purple-700 text-white mt-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
