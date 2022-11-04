import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => {
                console.log(toast.error('Your Password Not Match'))
            })

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
                                <input className="btn bg-orange-500 text-white border-transparent" type="submit" value="Login" />
                            </div>

                            <div className='text-center'>
                                <h3 className='text-gray-900 font-bold'>Or Sign In with</h3>
                                <div className='flex justify-center mt-5'>
                                    <FcGoogle className='mr-3 text-3xl'></FcGoogle>
                                    <FaFacebook className='mr-3 text-3xl text-info'></FaFacebook>
                                    <FaGithub className='mr-3 text-3xl mb-5'></FaGithub>
                                </div>

                                <p className="text-lg font-medium ">Have an account?
                                    <Link to='/singup' className='text-orange-500 ml-2'>Sign In</Link>
                                </p>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;