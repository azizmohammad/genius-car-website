import React from 'react';
import { FaArrowRight, } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-full bg-white border-2 border-gray-200 shadow-xl">
            <div className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold mb-3 text-gray-900">{title}</h2>
                <div className=" flex justify-between items-center">
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowRight className='text-orange-600'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;