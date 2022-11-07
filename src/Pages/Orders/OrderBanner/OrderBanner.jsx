import React from 'react';
import { Link } from 'react-router-dom';
import orderbanner from '../../../assets/images/checkout/checkout.png'

const OrderBanner = () => {
    return (
        <div>
            <div>
                <div className='banner-order'>
                    <img className='w-full h-full py-8 ' src={orderbanner} alt="" />
                </div>

                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/3">
                    <h1 className='text-6xl font-bold text-white'>
                        Cart Details
                    </h1>
                </div>

                <div className="absolute flex justify-center left-1/3 transform -translate-y-1/3 w-2/5  top-2/3 bg-orange-500 py-2 rounded-xl">
                    <Link to='/' className='text-white underline mr-2'>Home/</Link>
                    <Link className='text-white underline'>Product Details</Link>
                </div>
            </div>
        </div>
    );
};

export default OrderBanner;