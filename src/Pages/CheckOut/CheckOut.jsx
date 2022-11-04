import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CheckBanner from './CheckBanner/CheckBanner';


const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        // coustomar oders
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>
            <CheckBanner></CheckBanner>

            <form onSubmit={handlePlaceOrder} className='bg-gray-200 px-28 py-14 rounded-xl mb-8'>
                <h2 className="text-4xl font-semibold text-gray-900 mb-2">You are about to order: {title} </h2>
                <h4 className="text-3xl text-orange-500 mb-5">Price: ${price} </h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-white w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-white w-full  input-bordered" />
                    <input name="phone" type="number" placeholder="Your Phone" className="input input-white w-full  input-bordered" required />
                    <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-white w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-40 w-full mt-5" placeholder="Your Message" required></textarea>

                <input className='btn btn-info text-white my-8 w-full' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;