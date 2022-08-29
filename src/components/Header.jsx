import React from 'react';
import '../styling/Header.css';

function Header() {
    return <>
        <header className='header'>
            <div className="container-header">
                <h4 id='logo-header'>
                    Movie Mania
                </h4>
                <div className="menu-div-header">
                    <span href="#">Home</span>
                    <span href="#">About</span>
                    <span href="#">Contact</span>
                </div>
            </div>
        </header>
    </>;
}

export default Header;