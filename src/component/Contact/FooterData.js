import React from 'react';
import svgimg from '../Image/reviewbg.png';
import ContactFoter from './ContactFoter';
import style from './data.module.css';

const detailOne = [
    { text: 'About us' },
    { text: 'Contact scale' },
    { text: 'Careers' },
    { text: 'Security' },
    { text: 'Privacy' },
    { text: 'Terms' },
];

const detailTwo = [{ text: 'Help Center' }, { text: 'Video Tutorials' }];

const detailThree = [{ text: 'Developer Tools' }];

const detailFour = [
    { text: 'Customer Success' },
    { text: 'Scale' },
    { text: 'Educations ' },
    { text: 'Individuals' },
    { text: 'Revies' },
    { text: 'Privacy' },
];

const detailFive = [
    { text: 'About us' },
    { text: 'AvailAbility' },
    { text: 'Careers' },
    { text: 'Privacy' },
];

const date = new Date();

const FooterData = () => (
    <section className={style.footer}>
        <div className="footers">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <ContactFoter header="About Us" fdetails={detailOne} />
                    <ContactFoter header="Support" fdetails={detailTwo} />
                    <ContactFoter header="Developers" fdetails={detailThree} />
                    <ContactFoter header="Solution" fdetails={detailFour} />
                    <ContactFoter header="Feature" fdetails={detailFive} />
                </div>
            </div>
            <div className="copyright">
                <img src={svgimg} alt="as" className={`${style.svgbg}`} />
                <p className={`${style.ltext} text-center`}>
                    {' '}
                    <b>@copyright {date.getFullYear()}</b>{' '}
                </p>
            </div>
        </div>
    </section>
);

export default FooterData;
