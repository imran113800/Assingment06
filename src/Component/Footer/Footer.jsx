import React from "react";
import { FaFacebookF, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0B1B2B] text-gray-300 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                
                <div className="grid md:grid-cols-5 gap-10">

                    
                    <div className="md:col-span-2">
                        <h1 className="text-white text-2xl font-bold mb-3">DigiTools</h1>
                        <p className="text-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    
                    <div>
                        <h2 className="text-white font-semibold mb-3">Product</h2>
                        <ul className="space-y-2 text-sm">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h2 className="text-white font-semibold mb-3">Company</h2>
                        <ul className="space-y-2 text-sm">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h2 className="text-white font-semibold mb-3">Resources</h2>
                        <ul className="space-y-2 text-sm">
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h2 className="text-white font-semibold mb-3">Social Links</h2>
                        <div className="flex gap-3 mt-2">

                            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                                <FaGithub />
                            </div>

                            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                                <FaFacebookF />
                            </div>

                            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                                <FaXTwitter />
                            </div>

                        </div>
                    </div>

                </div>

               
                <div className="border-t border-gray-600 my-10"></div>

                
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white">Cookies</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;