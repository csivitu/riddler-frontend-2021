import React from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Layout from '../../components/registration-navbar/Layout';
import Pages from '../../components/registration-pages/Pages';
import Timer from '../../components/registration-pages/timer/Timers';

function Regs() {
    return (
        <Router>
            <Route exact path="/"><Layout /><Pages /></Route>
            
            
            <Route exact path ="/countdown">
                <Timer/>
            </Route>
        </Router>
    );
};

export default Regs
