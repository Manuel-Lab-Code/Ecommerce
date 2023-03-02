import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import logo192 from '.assets/logo192.png';
import './navbar.css';
import './main.css';
import { Link } from 'react-router-dom';
import { AppleLogo, FileSearch, ToggleRight, ShoppingCart, SidebarSimple, UserCircle, TwitchLogo } from "phosphor-react"

function Navbar() {
    const navRef = useRef();

        const showNavbar = ()=>{
            navRef.current.classList.toggle("responsive_nav");
        }

    return (
        <>
    <div className="navbar" >
        <img className="App-logo" src='logo51.jpg' size={50}/>
        {/* height={50} width={50} */}
        <nav ref={navRef}>
        
            <div className="links">
                <div className="links-bar">
                <input className="search" type="search" placeholder="search" size={100}   />
             
                    <Link to="/">Shop</Link>
                    <Link to="/cart"><ShoppingCart size={30}/></Link>
                    <Link to="/login"><UserCircle size={30}/></Link>
                        <button className="nav-btn av-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                </div>
            </div>
        </nav>
        <button className="nav-btn av-open-btn" onClick={showNavbar}>
        <FaBars />
        </button>
    </div>
        </>
    );
}
export default Navbar;