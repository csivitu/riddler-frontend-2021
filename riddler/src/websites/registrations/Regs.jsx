import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from '../../components/about/About';
import Tracks from '../../components/tracks/Tracks';
import Home from '../../components/home/Home';
import FaqsList from '../../components/faqs/FaqList.js';
import Layout from '../../components/layout/Layout';

function Regs() {
    return (
        <Router>
            <Layout />
            <Route exact path="/">
                <Home />
                <About />
                <Tracks/>
                <FaqsList />
            </Route>
        </Router>
    );
};

export default Regs
