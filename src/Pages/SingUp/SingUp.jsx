import React, { useContext } from 'react';
import { FaFacebook, FaGithub, } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SingUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSingUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.log(error)
                // setError(error.message)
            })
    }


    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content gap-20 grid md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl  py-10 bg-white border-2 border-gray-200">
                    <h1 className="text-5xl text-center font-bold">Sing Up</h1>

                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Your password" className="input input-bordered" required />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control py-4">
                            <input className="btn bg-orange-500 text-white border-transparent" type="submit" value="Sing Up" />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-gray-900 font-bold'>Or Sign In with</h3>
                            <div className='flex justify-center mt-5'>
                                <FcGoogle className='mr-3 text-3xl'></FcGoogle>
                                <FaFacebook className='mr-3 text-3xl text-info'></FaFacebook>
                                <FaGithub className='mr-3 text-3xl mb-5'></FaGithub>
                            </div>

                            <p className="text-lg font-medium ">Already have an account?
                                <Link to='/login' className='text-orange-500 ml-2'>Login</Link>
                            </p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SingUp;