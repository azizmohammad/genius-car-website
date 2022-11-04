import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20" id='about'>
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={parts} className=" absolute w-3/5 right-4 top-1/2 border-8 border-white rounded-lg shadow-2xl" alt='' />
                </div>

                <div className='w-1/2'>
                    <p className="text-2xl text-orange-600 font-bold">About Us</p>
                    <h1 className="text-5xl font-bold py-7">We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the <br />
                        majority have suffered alteration in some form, by injected humour, or randomised words <br />
                        which don't look even slightly believable. </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn mt-10 bg-orange-600 text-gray-50 border-transparent hover:bg-transparent hover:text-orange-500 hover:border-orange-500 mr-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;