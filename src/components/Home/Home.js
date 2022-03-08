import React from 'react';
import Feedback from '../Feedback/Feedback';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Feedback />
        </div>
    );
};

export default Home;