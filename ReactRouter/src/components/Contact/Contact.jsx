import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Left Section - Contact Info */}
                <div className="p-8 bg-gradient-to-r from-orange-600 to-orange-800 text-white flex flex-col justify-center">
                    <h1 className="text-4xl font-extrabold">Get in Touch</h1>
                    <p className="mt-4 text-lg">We’d love to hear from you! Fill in the form to start a conversation.</p>
                    
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="ml-3">123 Main Street, City, Country</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="ml-3">+44 1234 567 890</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-3">contact@company.com</span>
                        </div>
                    </div>
                </div>
                
                {/* Right Section - Form */}
                <div className="p-8 flex flex-col justify-center">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-orange-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
