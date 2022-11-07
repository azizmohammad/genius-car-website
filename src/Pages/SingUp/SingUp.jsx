import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SingUp = () => {
    // navigate
    const navigate = useNavigate();
    const { createUser, googleLogin, githubLogin, facebookLogin, emailVerifiy, updateUserProfile } = useContext(AuthContext)
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [error, setError] = useState('');

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
                setError('');
                navigate('/login');
                handleEmailVerifiction();
                handleUpdateUserProfile(name);
                toast.success('Verify Your Email Address Check Your Spam Box')
                form.reset();
            })
            .catch(error => {
                console.log(error)
                // setError(error.message)
            })
    }
    // email verification
    const handleEmailVerifiction = () => {
        emailVerifiy()
            .then(() => {
                // Email verification sent!
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // user profile update
    const handleUpdateUserProfile = (name,) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                console.log(error);
            });
    }

    // google login
    const handleGoogleSingIn = () => {
        googleLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log('error', error.message))
    }
    // github login
    const handleGithubLogin = () => {
        githubLogin(githubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log('error', error.message))
    }
    // facebook login
    const handleFacebookSingIn = () => {
        facebookLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log('error', error.message))
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
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
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
                                {error}
                            </label>
                        </div>
                        <div className="form-control py-4">
                            <input className="btn bg-orange-500 text-white border-transparent" type="submit" value="Sing Up" />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-gray-900 font-bold'>Or Sign In with</h3>
                            <div className='flex justify-center mt-5'>
                                <FcGoogle onClick={handleGoogleSingIn} className='mr-3 text-3xl'></FcGoogle>
                                <FaFacebook onClick={handleFacebookSingIn} className='mr-3 text-3xl text-info'></FaFacebook>
                                <FaGithub onClick={handleGithubLogin} className='mr-3 text-3xl mb-5'></FaGithub>
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