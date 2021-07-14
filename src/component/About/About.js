import React from 'react';
import { FaBattleNet } from 'react-icons/fa';
import image from '../Image/about2.jpg';
import style from './about.module.css';

const About = () => (
    <section className={`${style.asection} about my-5`} id="about">
        <div className="container">
            <h1 className="text-center my-5">About Us</h1>
            <div className="row">
                <div className="col-sm-6 mt-none mt-md-4">
                    <div className={style.aimg}>
                        <img src={image} alt="as" className={`${style.aImage} ms-4`} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="aboutDetail text-center mt-3 mt-sm-1">
                        <h1 className={style.aicon}>
                            <FaBattleNet />
                        </h1>
                        <h1 className={`${style.aheader} my-none my-sm-4`}>ABOUT OUR TEAM</h1>

                        <p className={style.btext}>
                            A team comprised of board certified accountants. We will design your
                            imagination. our team is one of the hard worker team
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
