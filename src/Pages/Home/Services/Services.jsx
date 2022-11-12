import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [isAsc])
    return (
        <div id='services'>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-4xl font-bold text-gray-900">Our Service Area</h2>
                <p className=''>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-primary' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }

            </div>
            <div className='flex justify-center items-center mb-10'>
                <button className="btn mx-auto border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-transparent bg-transparent ">More Services</button>
            </div>
        </div>
    );
};

export default Services;