
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title } = useLoaderData();
    return (
        <div className='mb-30'>
            <h2>{title} </h2>
        </div>
    );
};

export default CheckOut;