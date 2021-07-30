import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import Layout from '../../components/registration-navbar/Layout';
import Pages from '../../components/registration-pages/Pages';

function Regs() {
    return (
        <Router>
            <Layout />
            <Pages />
        </Router>
    );
};

export default Regs
