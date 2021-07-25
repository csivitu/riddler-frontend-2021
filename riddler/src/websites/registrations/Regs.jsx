import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

function Regs() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </Router>
    );
};

export default Regs
