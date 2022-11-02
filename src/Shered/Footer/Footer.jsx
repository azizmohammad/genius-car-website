import React from 'react';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-32 bg-gray-900 text-gray-100">
                <div>
                    <img src={logo} alt="logo img" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <h2 className="font-bold text-lg text-gray-100">Services</h2>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg text-gray-100">Company</h2>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg text-gray-100">Legal</h2>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;