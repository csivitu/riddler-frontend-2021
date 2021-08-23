import React, {useState} from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

import './Layout.css';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    )
}

export default Layout;