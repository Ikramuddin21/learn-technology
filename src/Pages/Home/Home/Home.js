import React from 'react';
import Blogs from '../../Shared/Blogs/Blogs/Blogs';
import Testimonials from '../../Shared/Testimonials/Testimonials';
import AccordionQA from '../AccordionQA/AccordionQA';
import AppDownload from '../AppDownload/AppDownload';
import Featured from '../Featured/Featured';
import Feedback from '../Feedback/Feedback';
import Hero from '../Hero/Hero';
import Latests from '../Latests/Latests';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <AccordionQA />
            <Featured />
            <Services />
            <Latests />
            <AppDownload />
            <Testimonials />
            <Blogs />
            <Feedback />
        </div>
    );
};

export default Home;