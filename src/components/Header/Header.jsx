import React from 'react';
import './Header.css'
import logo from '../../../images/profile.png'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h2>Knowledge Cafe</h2>
                <div className='manu'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Privecy</a></li>
                    </ul>
                <img src={logo} alt="" />
                </div>
                
            </div>
            
        </div>
    );
};

export default Header;