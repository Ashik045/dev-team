/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Video from '../Image/video.mp4';
import style from './Header.module.css';

const Header = () => (
    <section id="home" className={style.hSec}>
        <video autoPlay muted loop width="100%" height="auto">
            <source src={Video} type="video/mp4" className={style.bgVideo} />
        </video>
        <div className={style.hText}>
            <h1 className={style.ftext}>
                YOUR BEST TRUSTED <b className={`${style.head}`}>DEVELOPER</b> TEAM
            </h1>
            <h4 className={`${style.stext} text-center bg-dark py-none py-sm-2`}>Join Our Team</h4>
        </div>
    </section>
);

export default Header;
