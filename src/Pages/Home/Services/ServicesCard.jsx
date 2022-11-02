import React from 'react';
import { FaArrowRight, } from 'react-icons/fa';



const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-white border-2 border-gray-200 shadow-xl">
            <div className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold mb-3 text-gray-900">{title}</h2>
                <div className=" flex justify-between items-center">
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <FaArrowRight className='text-orange-600'></FaArrowRight>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;