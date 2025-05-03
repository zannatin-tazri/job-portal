import React from 'react';
import { easeOut, motion } from "motion/react"
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="px-28  hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
      src={team2}
      animate={{y:[5,100,50]}}
      transition={{duration:10, repeat:Infinity}}
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-indigo-500 shadow-2xl"
    />
    <motion.img
      src={team1}
      animate={{x:[100,150,100]}}
      transition={{duration:10, delay:5,repeat:Infinity}}
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-indigo-500 shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      <motion.h1 
      animate={{x:50}}
      transition={{duration:2, delay:1, ease: easeOut}}
      className="lg:text-5xl text-3xl font-bold">Welcome to the <motion.span
      animate={{color:['#DDA0DD','#4B0082']}}
      transition={{duration:2, repeat: Infinity, delay: 1.5}}
      >Hunt For Hire</motion.span> </motion.h1>
      <p className="ms-12 py-6 text-purple-950 font-semibold text-xl">
        Join with us to discover your perfect job or the right talent to hire.
      </p>
      <button className="ms-12 btn btn-primary bg-purple-700">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;