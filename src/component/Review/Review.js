import React from 'react';
import style from './mainreview.module.css';
import ReviewCard from './ReviewCard';

const Review = () => (
    <section>
        <div className={`${style.reviews} review my-5`} id="review">
            <h1 className="text-center my-5">What People Says About us</h1>
            <div className="asdfa">
                <ReviewCard />
            </div>
        </div>
    </section>
);

export default Review;
