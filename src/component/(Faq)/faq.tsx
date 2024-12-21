import React from 'react';

export default function Faq() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 mx-auto w-full max-w-screen-lg">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">Question Look Here</h1>
      <p className="text-center mb-8 text-gray-600">
        Here are some common questions about our chair collection. Find the answers below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* FAQ Item 1 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">What types of chairs do you offer?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            We offer a variety of chairs, including ergonomic office chairs, accent chairs, dining chairs, and recliners, each designed for comfort and style.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">Are the chairs adjustable?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            Yes, many of our chairs come with adjustable height, recline, and armrest settings to ensure maximum comfort and support for different body types.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">What materials are used in your chair collection?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            Our chairs are crafted from high-quality materials such as premium wood, durable metals, and eco-friendly fabrics to offer both elegance and durability.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">Do you offer customization for your chairs?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            Yes, we offer customization options such as fabric choice, color, and additional features to make sure your chair perfectly fits your space and preferences.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">How do I maintain my chair?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            Regularly clean your chair using a soft cloth and mild cleaning solutions. Avoid using harsh chemicals to maintain the appearance and durability of the materials.
          </p>
        </div>

        {/* FAQ Item 6 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">What is the warranty for your chairs?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            Our chairs come with a standard one-year warranty, covering defects in materials and craftsmanship. Additional warranty options are available for certain models.
          </p>
        </div>
      </div>
    </div>
  );
}