import React from 'react';
import WorkforceSection from './WorkForceSection';
import AboutUs from './AboutUs';

const WhyChooseUs = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='py-8 text-purple-900 mt-8 text-center text-3xl md:text-5xl font-bold'>Why Choose Us?</h1>
                <p className='text-gray-600  font-semibold px-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dignissimos tenetur accusamus iure sunt soluta reprehenderit eius? Obcaecati minus officia ratione recusandae, asperiores sapiente, aliquid eaque porro eius similique quos.</p>
            </div>
            <WorkforceSection></WorkforceSection>
            <AboutUs></AboutUs>
        </div>
    );
};

export default WhyChooseUs;