import React from 'react';
import { easeOut, motion } from "motion/react"
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="px-24 hero-content flex-col lg:flex-row-reverse">
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
      className="lg:text-5xl text-3xl font-bold">Latest <motion.span
      animate={{color:['#DDA0DD','#4B0082']}}
      transition={{duration:2, repeat: Infinity, delay: 1.5}}
      >Job</motion.span> For You</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;