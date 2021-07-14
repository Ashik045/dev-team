/* eslint-disable react/no-array-index-key */
import React from 'react';

const Category = ({ categoris, filterItem }) => (
    <div className="btns my-3 text-center">
        {categoris.map((item, index) => (
            <button
                type="button"
                key={index}
                className="btn btn-outline-danger mx-2 mt-2 mt-sm-none"
                onClick={() => filterItem(item)}
            >
                {item}
            </button>
        ))}
    </div>
);

export default Category;
