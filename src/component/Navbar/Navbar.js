/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsArrow90DegUp, BsJustify, BsX } from 'react-icons/bs';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Logo } from '../Logo/fastify-icon.svg';
import style from './Navbar.module.css';
import NavData from './Navdata';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navicon, setNavicon] = useState(true);
    const [toTop, setToTop] = useState(false);

    const colorNav = () => {
        if (window.scrollY > 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const icon = () => setNavicon(!navicon);

    const handleTop = () => {
        if (window.scrollY > 600) {
            setToTop(true);
        } else {
            setToTop(false);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const offset = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: offset - 55,
        });
    };

    window.addEventListener('scroll', colorNav);
    window.addEventListener('scroll', handleTop);

    return (
        <>
            <nav
                className={
                    navbar
                        ? `${style.activeNav}  navbar navbar-expand-sm navbar-light sticky-top`
                        : 'navbar navbar-expand-sm navbar-light sticky-top'
                }
            >
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <Logo className={`${style.logo}`} />
                    </a>
                    <button
                        className={`${style.toggle} navbar-toggler`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        onClick={icon}
                    >
                        {navicon ? <BsJustify /> : <BsX />}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {NavData.map((data) => (
                                <li className="nav-item text-center px-2" key={data.id}>
                                    <a className="nav-link" href={data.url} onClick={handleClick}>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            {toTop ? (
                <a className={style.topBtn} href="#home">
                    <BsArrow90DegUp />
                </a>
            ) : null}
        </>
    );
};
export default Navbar;
