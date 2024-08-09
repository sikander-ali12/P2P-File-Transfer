import React from 'react';
import logo from './images/logo.png';

const MyHeader = ({ toggleTheme, darkMode }) => {
    return (
        <header>
            <div className='logo'>
            <img alt="logo" src={logo} width={40} height={40} />
            <h3 >FILE SHARE</h3>
            </div>
            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle"
                    checked={darkMode}
                    onChange={toggleTheme}
                />
                <label htmlFor="toggle" className="toggle-label"></label>
            </div>
        </header>
    );
};

export default MyHeader;
