import React from 'react';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Home from './home/Home';
import FaqsList from './faqs/FaqList.js';

function Pages() {
    return (
        <div>
            <Home />
            <About />
            <Tracks/>
            <FaqsList />
        </div>
    );
}

export default Pages;