import React from 'react';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Home from './home/Home';
import FaqsList from './faqs/FaqList.js';
// import Timer from './timer/Timers'
import Contact from './contact/Contact';
import Sponsors from './sponsors/sponsors.jsx';

function Pages() {
    return (
        <div>
            <Home />
            <About />
            <Tracks/>
            <FaqsList />
            <Sponsors />
            <Contact/>
        </div>
    );
}

export default Pages;