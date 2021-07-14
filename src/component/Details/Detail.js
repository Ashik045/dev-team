/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Category from './Category';
import DetailCard from './DetailCard';
import DetailData from './DetailData';

const categoryBtn = ['All', ...new Set(DetailData.map((item) => item.category))];
console.log(categoryBtn);

const Detail = () => {
    const [menuItem, setmenuItem] = useState(DetailData);
    const [categoris, setCategoris] = useState([]);

    const filterItem = (category) => {
        if (category === 'All') {
            setmenuItem(DetailData);
            return;
        }
        const newItem = DetailData.filter((item) => item.category === category);
        setmenuItem(newItem);
    };

    return (
        <section id="details">
            <div className="container">
                <h1 className="text-center">Our Developers</h1>
                <h3 className="text-center my-4">Developers Of Our Team</h3>
                <Category categoris={categoryBtn} filterItem={filterItem} />
                <div className="row">
                    {menuItem.map((data) => (
                        <DetailCard key={data.id} items={data} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Detail;
