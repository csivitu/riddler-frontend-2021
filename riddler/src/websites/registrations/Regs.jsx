import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import About from '../../components/about/About';
import Tracks from '../../components/tracks/Tracks';
import Home from '../../components/home/Home';

function Regs() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Home />
            <About />
            <Tracks/>
        </Router>
    );
};

export default Regs
