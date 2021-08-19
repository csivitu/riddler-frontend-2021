import React, {useState} from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

import './Layout.css';

const Layout = ({ backgroundColor,wantHint }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar backgroundColor={backgroundColor} wantHint={wantHint} isOpen={isOpen} toggle={toggle}/>
            <Navbar backgroundColor={backgroundColor} wantHint={wantHint} toggle={toggle}/>
        </>
    )
}

export default Layout;