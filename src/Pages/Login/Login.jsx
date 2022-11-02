import React from 'react';
import { FaFacebook, FaGithub, } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <div className="hero w-full my-20 ">
                <div className="hero-content gap-20 grid md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl  py-10 bg-white border-2 border-gray-200">
                        <h1 className="text-5xl text-center font-bold">Login </h1>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="Your password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-gray-900 font-bold'>Or Sign In with</h3>
                                <div className='flex justify-center mt-5'>
                                    <FcGoogle className='mr-3 text-3xl'></FcGoogle>
                                    <FaFacebook className='mr-3 text-3xl text-info'></FaFacebook>
                                    <FaGithub className='mr-3 text-3xl mb-5'></FaGithub>
                                </div>

                                <Link className="text-lg font-medium ">Have an account?
                                    <span className='text-orange-500 ml-2'>Sign In</span>
                                </Link>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;