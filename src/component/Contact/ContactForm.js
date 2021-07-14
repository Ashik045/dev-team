/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './contactForm.module.css';

const ContactForm = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const handleEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const handlePass = (e) => {
        setPassValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire('Everything okey!', 'You will be in our touch soon!', 'success');
        setEmailValue('');
        setPassValue('');
    };

    return (
        <section className={styles.fcontact}>
            {/* <img src={image} alt="aa" className={`${styles.formbg}`} /> */}
            <div clasName={`${styles.formBg}`}>
                <h1 className="text-center">Contact Us</h1>
                <div className="container mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-8">
                                <div className="mb-3 ">
                                    <label htmlFor="as" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={emailValue}
                                        onChange={handleEmail}
                                        required
                                    />
                                    <div className="form-text">we will never share your email</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="as" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={passValue}
                                        onChange={handlePass}
                                        required
                                    />
                                </div>
                                <input
                                    className="btn btn-primary w-100"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default ContactForm;
