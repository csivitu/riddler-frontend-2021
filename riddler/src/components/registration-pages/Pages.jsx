import React from 'react';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Home from './home/Home';
import FaqsList from './faqs/FaqList.js';
import Timer from './timer/Timers'
import Contact from './contact/Contact';

function Pages() {
    return (
        <div>
            <Home />
            <About />
            <Tracks/>
            <FaqsList />
            <Timer/>
            <Contact/>
        </div>
    );
}

export default Pages;