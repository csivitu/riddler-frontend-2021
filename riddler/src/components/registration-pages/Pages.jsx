import React from 'react';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Home from './home/Home';
import FaqsList from './faqs/FaqList.js';
import Timer from './timer/Timers'

function Pages() {
    return (
        <div>
            <Home />
            <About />
            <Tracks/>
            <FaqsList />
            <Timer/>
        </div>
    );
}

export default Pages;