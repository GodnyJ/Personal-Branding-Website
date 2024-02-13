import React, { useState, useRef, useEffect } from "react";
import { FaBars } from 'react-icons/fa';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItemsRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (navItemsRef.current && !navItemsRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navItemsRef]);

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className="nav-bar">

            <div className="nav-bar__logo">
                <a href="#home"><img src="MGlogo.png" alt='logo-img' className="nav-bar__logo-img" /></a>
            </div>

            <FaBars className="nav-bar__hamburger" onClick={toggleMenu}/>

            <nav ref={navItemsRef} className={`nav-bar__nav ${isMenuOpen ? 'active' : ''}`} >
                <ul className="nav-bar__items">
                    <li className="nav-bar__item"><a href="#upcoming" >szkolenia</a></li>
                    <li className="nav-bar__item"><a href="#about" >o mnie</a></li>
                    <li className="nav-bar__item"><a href="#footer" >kontakt</a></li>
                    <li className="nav-bar__item"><a href="https://godny.substack.com/" target="_blank">blog</a></li>
                    <a href="#services"><button className="nav-bar__btn black-button">usługi</button></a>
                </ul>
            </nav>

        </div>
    )
}
