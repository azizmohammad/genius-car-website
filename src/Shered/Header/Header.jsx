import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import { FaUserAlt } from 'react-icons/fa';
const Header = () => {

    const { user, lotOut } = useContext(AuthContext);

    const handelLogOut = () => {
        lotOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const { pathname } = useLocation();
    const menuItem = <>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><Link to='/home'>Home</Link></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#about'>about</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#services'>Services</a></li>


        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#blog'>Blog</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#contact'>Contact</a></li>
    </>
    return (
        <div className="navbar px-8 text-orange-500 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {pathname === '/login' ? (
                            <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><Link to='/login'>oder</Link></li>
                        ) : menuItem}
                    </ul>
                </div>
                <div className=" text-xl">
                    <img className='w-16 h-16' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <span className=' mr-2 text-orange-400'>{user?.displayName}</span>
                            <HiOutlineShoppingBag className='text-2xl'></HiOutlineShoppingBag>
                            <HiSearch className='text-2xl mx-2'></HiSearch>
                            <Link to='/login'><button className="btn bg-orange-600 text-gray-50 border-transparent hover:bg-transparent hover:text-orange-600 hover:border-orange-500 mr-3" to='/login'>Appointment</button></Link>

                        </>
                        : <Link className="btn btn-outline btn-info mr-3" to='/login'>Login</Link>
                }
                <Link>
                    {user?.photoURL ?
                        <div title={user.displayName}>
                            <img className='ms-3 w-10 h-10 rounded-full ' src={user?.photoURL} data-tip={user.displayName} alt="" />
                        </div>
                        : <div className="dropdown dropdown-bottom">
                            <label tabIndex={0} className="btn bg-white m-1">
                                <FaUserAlt className='text-orange-400 text-xl ms-1'></FaUserAlt>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu px-2 shadow bg-blue-300 rounded-box ">
                                <Link to='/login'><button onClick={handelLogOut} className="btn  bg-orange-600 text-gray-50 border-transparent hover:bg-transparent hover:text-orange-600 hover:border-orange-500 my-2" to='/login'>LogOut</button></Link>

                                {/* <li><a>Item 2</a></li> */}
                            </ul>
                        </div>
                    }
                </Link>

            </div>
        </div>
    );
};

export default Header;