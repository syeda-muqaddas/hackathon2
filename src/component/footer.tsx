import React from 'react';
import { GiSofa } from "react-icons/gi";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap text-center md:text-left justify-center">
          <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0 mx-auto">
            <a className="flex title-font font-medium items-center justify-center text-gray-900">
              <GiSofa className="text-emerald-500 h-10 w-10" />
              <span className="ml-3 text-2xl">Comporty</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indigo</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">Sofa</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Arm Chair</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Wing Chair</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Desk Chair</a></li>
            </nav>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">Help and Support</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Help</a></li>
            </nav>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex justify-center items-end">
              <div className="relative w-full sm:w-40 md:w-auto mb-3 md:mb-0">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="ml-4 text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 text-center">Stay updated with our latest news and products</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
