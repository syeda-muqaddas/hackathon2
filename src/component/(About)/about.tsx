import Image from 'next/image';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

export default function About() {
  const featureImages = ['/featuredata/Sofa1.png','/featuredata/Sofa2.png', '/featuredata/Sofa3.png','/featuredata/Sofa4.png',];

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
        {/* Content Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 bg-teal-600 p-8 rounded-lg shadow-lg text-white flex flex-col justify-between items-center md:items-start">
          <h1 className="title-font font-medium text-2xl md:text-3xl mb-4 text-white text-center md:text-left">
            About Us - Comforty
          </h1>
          <button className="px-6 py-2 bg-teal-800 text-white font-semibold rounded hover:bg-teal-900 transition duration-300">
            View Product
          </button>
        </div>

        {/* Image Section faniture kay  */}
        <div className="w-full md:w-1/2 px-4 md:px-8 rounded-lg overflow-hidden mt-6 md:mt-0">
          <div className="relative w-full h-96">
            <Image className="object-cover object-center"src="/featuredata/Sofa1.png"alt="About Us Image"layout="fill" quality={90}/>
          </div>
        </div>
      </div>
{/* ai copy  */}
    {/* Brand Difference Section */}
<h1 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-20">What Makes Our Brand Different</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-48 py-8">
  {[
    { emoji: '🚍', title: 'Next Day as Standard', text: 'Order before 3 pm to get standard delivery the next day.' },
    { emoji: '🚀', title: 'Fast Shipping', text: 'Enjoy fast and reliable shipping for all your orders.' },
    { emoji: '🛠️', title: 'Quality Assurance', text: 'We ensure the highest quality for all our products.' },
    { emoji: '🤝', title: 'Customer Support', text: 'We provide excellent customer support 24/7.' },
  ].map((item, index) => (
    <div key={index} className="bg-slate-200 p-6 md:p-8 rounded-lg shadow-md text-teal-600 flex flex-col justify-between">
      <span className="block mb-4 text-lg font-semibold">{item.emoji}</span>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
      <p className="text-teal-600 text-base md:text-lg">{item.text}</p>
    </div>
  ))}
</div>

{/* Featured Products Section */}
<div className="px-4 sm:px-8 md:px-48 py-8">
  <h1 className="text-2xl font-bold mb-4 pl-4">Our Popular Product Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
    {featureImages.map((val, i) => (
      <div
        key={i}
        className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      >
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
</section>
  );}
