import React from 'react';
import './navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container" style={{display:"contents"}}>
                <h1 className="navbar-title">Homepage Summary</h1>
                <ul className="navbar-links">
                    <li className="navbar-link ">Home</li>
                    <li className="navbar-link ">Products</li>
                    <li className="navbar-link">About Us</li>
                    <li className="navbar-link">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;