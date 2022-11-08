import React from 'react';
import errorePage from '../../assets/images/errorpage/ErrorePage.png'

const ErrorePage = () => {
    return (
        <div className='flex justify-center items-center mx-auto h-screen'>
            <img className='w-1/2 h-3/4  ' src={errorePage} alt="" />
        </div>
    );
};

export default ErrorePage;