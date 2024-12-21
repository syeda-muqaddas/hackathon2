import Image from 'next/image';
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';

export default function ProductPage() {
  const FeatureImage = [
    '/featuredata/Sofa1.png',
    '/featuredata/Sofa2.png',
    '/featuredata/Sofa3.png',
    '/featuredata/Sofa4.png',
    '/featuredata/Sofa5.png',
    '/featuredata/Sofa6.png',
    '/featuredata/Sofa7.png',
    '/featuredata/Sofa8.png',
  ];
    
    return (
      <div className="px-4 sm:px-8 md:px-52 py-8 mt-28" >

      <div>
        <h1 className="text-2xl  md:text-3xl font-bold mb-4 pl-4 text-center">Our Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {FeatureImage.map((val, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src={val}
                  alt={`Sofa${i}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between w-full px-4 py-2">
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                  <span className="text-black text-lg font-bold">$20</span>
                </div>
                <div className="flex items-center">
                  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}