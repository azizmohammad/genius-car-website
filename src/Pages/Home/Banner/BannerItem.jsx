import React from 'react';

const BannerItem = ({ slide }) => {
    const { image } = slide;
    return (
        <div className=" w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full rounded-2xl" alt='img1' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-lg font-semibold text-white'>
                    There are many variations of passages of  available, but
                    the majority have suffered alteration in some form
                </p>
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn bg-orange-600 text-gray-50 border-transparent hover:bg-transparent hover:text-white hover:border-orange-500 mr-5">Discover More</button>


                <button className="btn border-gray-50 text-gray-100 hover:bg-orange-600 hover:text-white hover:border-transparent bg-transparent">Latest Project</button>
            </div>

        </div>
    );
};

export default BannerItem;