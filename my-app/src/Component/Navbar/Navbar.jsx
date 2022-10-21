
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ()=> {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/" className="text">Home</Link></li>
                    <li><Link to="/about" className="text">About</Link></li>
                    <li><Link to="/contact" className="text">Contact</Link></li>
                </ul>
            </nav>
            
            <Outlet />
        </>
    );
};

export default Navbar