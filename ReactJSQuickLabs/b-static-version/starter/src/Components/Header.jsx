import React from "react";
import logo from './images/qalogo.svg';

const Header = () => {
    return(
        <header>
        <nav>
            <a 
            href="https://www.qa.com"
            className="navbar-brand" 
            target="_blank" 
            rel="noreferrer"
            >
                <img src={logo} alt="QA Ltd" style={{width: '100px'}}/>
            </a>
            <a className="navbar-brand" href="/" rel="noreferrer">
                Todo App
            </a>
        </nav>
        </header>
    );
};

export default Header;