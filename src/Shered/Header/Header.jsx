import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {

    const { pathname } = useLocation();
    const menuItem = <>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><Link to='/home'>Home</Link></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#about'>about</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#services'>Services</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#products'>Products</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#team'>Team</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#blog'>Blog</a></li>
        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><a href='#contact'>Contact</a></li>

        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><Link to='/login'>Login</Link></li>
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
                    {pathname === '/login' ? (
                        <li className='font-semibold hover:bg-orange-500 hover:text-white hover:border-transparent transition-all rounded-lg'><Link to='/login'>oder</Link></li>
                    ) : menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {pathname === '/login' ? (
                    <button className="btn border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-transparent bg-transparent">Login</button>
                ) : <button className="btn border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-transparent bg-transparent">Appointment</button>}

            </div>
        </div>
    );
};

export default Header;