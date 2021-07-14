/* eslint-disable react/no-array-index-key */
import React from 'react';
import style from './Footer.module.css';

const ContactFoter = (props) => {
    const { header, fdetails } = props;
    return (
        <div className="col-sm-2 mt-2 mt-sm-5">
            <h2>{header}</h2>
            <ul className="list-unstyled">
                {fdetails &&
                    fdetails.map((item, index) => (
                        <li className="my-4" key={index}>
                            <a href="#as" className={`${style.links}`}>
                                {item.text}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default ContactFoter;
