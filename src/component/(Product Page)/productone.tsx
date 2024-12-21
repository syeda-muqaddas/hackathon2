import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'; // Importing icons from react-icons
import Image from 'next/image'; // Importing Image component from next/image

// Define the Contact component
export default function Contact() {
  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      {/* Main container with padding and centered content */}
      
      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">GET In Touch with Us</h1>
      <p className="text-center mb-8 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate volupta<br />
        rem debitis autem libero quisquam.
      </p>
      
      {/* Content container */}
      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row p-6 rounded-lg">
        
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-6">
            
            {/* Address Section */}
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-indigo-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Address</strong>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
            
            {/* Phone Number Section */}
            <div className="flex items-start">
              <FaPhoneAlt className="text-green-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Phone Number:</strong>
                <p>+1 (234) 567-8901</p>
                <p>+1 (234) 567-8901</p>
              </div>
            </div>
            
            {/* Working Time Section */}
            <div className="flex items-start">
              <FaClock className="text-yellow-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Working Time:</strong>
                <p>Mon-Fri, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Responsive Images Section */}
        <div className="w-full flex flex-wrap items-center mt-16 justify-evenly bg-slate-300 mx-4 md:mx-8 py-10">
          <Image 
            src="/contactservices/first.png" // Image source
            alt="Service 1" // Alt text for image
            width={1000} // Image width
            height={1000} // Image height
            className="max-w-[200px] w-full h-auto mb-4 md:mb-0" // CSS classes for responsive design
          />
          <Image 
            src="/contactservices/second.png" // Image source
            alt="Service 2" // Alt text for image
            width={1000} // Image width
            height={1000} // Image height
            className="max-w-[200px] w-full h-auto mb-4 md:mb-0" // CSS classes for responsive design
          />
          <Image 
            src="/contactservices/third.png" // Image source
            alt="Service 3" // Alt text for image
            width={1000} // Image width
            height={1000} // Image height
            className="max-w-[200px] w-full h-auto" // CSS classes for responsive design
          />
        </div>
      </div>
    </div>
  );
}
