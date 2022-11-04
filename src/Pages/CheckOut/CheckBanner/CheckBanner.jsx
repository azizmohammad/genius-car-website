import React from 'react';
import { Link } from 'react-router-dom';
import checkimg from '../../../assets/images/checkout/checkout.png'

const CheckBanner = () => {
    return (
        <div>
            <div className='banner-img'>
                <img className='w-full py-8 ' src={checkimg} alt="" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-6xl font-bold text-white'>
                    Check Out
                </h1>
            </div>


            <div className="absolute flex justify-center left-1/3 transform -translate-y-1/3 w-2/5  top-2/3 bg-orange-500 skew-6 py-2 ">
                <Link to='/' className='text-white underline mr-2'>Home/</Link>
                <Link className='text-white underline'>Checkout</Link>
            </div>
        </div>
    );
};

export default CheckBanner;
