import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import WhyChooseUs from './AboutUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HotJobs></HotJobs>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;