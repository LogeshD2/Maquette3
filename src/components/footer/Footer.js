import React from "react";
import logo from "/public/image/LogoW.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-neutral-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
                <div>
                    <div className="flex items-center mb-4">
                        <Image src={logo} alt="Nexcent Logo" className="mr-2" width="191" height="29.67" /> 
                    </div>
                    <p className="font-regular text-body-3 text-neutral-silver">
                        Copyright © 2020 Nexcent ltd.<br />
                        All rights reserved
                    </p>
                    <div className="flex space-x-4 mt-4">

                        <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="Dribbble" className="hover:text-gray-400">
                            <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="YouTube" className="hover:text-gray-400">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h5 className="text-headline-4 font-medium text-neutral-white mb-4">Company</h5>
                    <ul>
                        <li><a href="#" className="font-regular text-body-3">About us</a></li>
                        <li><a href="#" className="font-regular text-body-3">Blog</a></li>
                        <li><a href="#" className="font-regular text-body-3">Contact us</a></li>
                        <li><a href="#" className="font-regular text-body-3">Pricing</a></li>
                        <li><a href="#" className="font-regular text-body-3">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-headline-4 font-medium text-neutral-white mb-4">Support</h5>
                    <ul>
                        <li><a href="#" className="font-regular text-body-3">Help center</a></li>
                        <li><a href="#" className="font-regular text-body-3">Terms of service</a></li>
                        <li><a href="#" className="font-regular text-body-3">Legal</a></li>
                        <li><a href="#" className="font-regular text-body-3">Privacy policy</a></li>
                        <li><a href="#" className="font-regular text-body-3">Status</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-headline-4 font-medium text-neutral-white mb-4">Stay up to date</h5>
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="bg-neutral-white border font-regular text-body-3 p-2 rounded-l w-full text-[#D9DBE1] text-opacity-100" 
                        />
                        <button className="bg-green-500 p-2 rounded-r text-white">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
