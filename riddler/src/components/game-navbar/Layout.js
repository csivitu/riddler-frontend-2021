import React, {useState} from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

import './Layout.css';

const Layout = ({ backgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar backgroundColor={backgroundColor} isOpen={isOpen} toggle={toggle}/>
            <Navbar backgroundColor={backgroundColor} toggle={toggle}/>
        </>
    )
}

export default Layout;