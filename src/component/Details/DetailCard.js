import React from 'react';
import style from './Detailcard.module.css';

const DetailCard = ({ items }) => {
    const { image, title, text, category } = items;
    return (
        <div className="col-sm-6">
            <div className={`${style.ccard} card mb-4`}>
                <div className="row">
                    <div className="col-5">
                        <img src={image} alt={title} className={style.cimage} />
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-between mb-md-4">
                            <h4>{category}</h4>
                            <h6 className="d-none d-sm-block mt-2">{title}</h6>
                        </div>

                        <p className="mt-md-5 text-center">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailCard;
