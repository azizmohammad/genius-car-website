import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../Shered/Header/auth';

const Login = () => {
    const { singIn, googleLogin, githubLogin, facebookLogin, setLoading } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email,
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://genius-car-server-woad-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // jwt token add localstroge
                        localStorage.setItem('genius-Token', data.token)
                        if (user.emailVerified) {
                            navigate(from, { replace: true });
                        }
                        else {
                            toast.error('Your Email Not Verify ')
                        }
                    })

                form.reset();
                setError("");

            })
            .catch(e => {
                console.log(toast.error('Your Password Not Match'))
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }

    // google login
    const handleGoogleSingIn = () => {
        googleLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email,
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://genius-car-server-woad-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // jwt token add localstroge
                        localStorage.setItem('genius-Token', data.token)
                        if (user.emailVerified) {
                            navigate(from, { replace: true });
                        }
                        else {
                            toast.error('Your Email Not Verify ')
                        }
                    })
            })
            .catch(error => console.log('error', error.message))
    }
    // github login
    const handleGithubLogin = () => {
        githubLogin(githubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email,
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://genius-car-server-woad-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // jwt token add localstroge
                        localStorage.setItem('genius-Token', data.token)
                        if (user.emailVerified) {
                            navigate(from, { replace: true });
                        }
                        else {
                            toast.error('Your Email Not Verify ')
                        }
                    })
            })
            .catch(error => console.log('error', error.message))
    }
    const handleFacebookSingIn = () => {
        facebookLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email,
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://genius-car-server-woad-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // jwt token add localstroge
                        localStorage.setItem('genius-Token', data.token)
                        if (user.emailVerified) {
                            navigate(from, { replace: true });
                        }
                        else {
                            toast.error('Your Email Not Verify ')
                        }
                    })
            })
            .catch(error => console.log('error', error.message))
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
                                    {error}
                                </label>
                            </div>
                            <div className="form-control py-4">
                                <input className="btn bg-orange-500 text-white border-transparent" type="submit" value="Login" />
                            </div>

                            <div className='text-center'>
                                <h3 className='text-gray-900 font-bold'>Or Sign In with</h3>
                                <div className='flex justify-center mt-5'>
                                    <FcGoogle onClick={handleGoogleSingIn} className='mr-3 text-3xl'></FcGoogle>
                                    <FaFacebook onClick={handleFacebookSingIn} className='mr-3 text-3xl text-info'></FaFacebook>
                                    <FaGithub onClick={handleGithubLogin} className='mr-3 text-3xl mb-5'></FaGithub>
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