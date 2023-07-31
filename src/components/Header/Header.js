import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <h2>Knowledge Cafe</h2>
                <a href="google.com">Google</a>
                <a href="https://www.wikipedia.org/">Wikipedia</a>
            </div>
            <img src={require('../../images/icon.png')} alt="" />
        </div>
    );
};

export default Header;