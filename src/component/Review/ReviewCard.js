import React from 'react';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import style from './review.module.css';
import ReviewData from './ReviewData';

SwiperCore.use([Pagination]);

const ReviewCard = () => (
    <div className="container">
        <Swiper
            slidesPerView={2}
            spaceBetween={25}
            pagination={{
                clickable: true,
            }}
            className={`${style.mySwiper} mySwiper`}
        >
            {ReviewData.map((data) => (
                <SwiperSlide key={data.id}>
                    <div className={`${style.card} card`}>
                        <div className="header d-flex justify-content-between">
                            <h5 className={`${style.cName} ms-2 mt-2`}>{data.name}</h5>
                            <img src={data.img} className={style.rImage} alt={data.name} />
                        </div>
                        <p className="ms-4">
                            {data.icon}
                            {data.icon}
                            {data.icon}
                            {data.icon}
                            {data.icon}
                        </p>
                        <div className="card-body">
                            <div className="card-text">
                                <p>
                                    <b>{data.text}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
export default ReviewCard;
