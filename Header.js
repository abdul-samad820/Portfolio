import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Abdul Samad's Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
