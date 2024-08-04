import React from 'react';

function Middle() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
       <h2 className="mt-4 text-3xl text-center  font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj mb-16">
            Start Your <span className=' bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600'>Adventure</span>
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer border border-gray-300 transition-transform transform hover:shadow-lg hover:scale-105 text-center ease-in-out">
          <div className="mb-4">
            <img src="/world.png" alt="Optimal Route Planning" className="mx-auto w-16 h-16" />
          </div>
          <h3 className="text-xl font-bold mb-2">Optimal Route Planning</h3>
          <p className="text-gray-600">
            Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort.
          </p>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer  border border-gray-300 transition-transform transform hover:shadow-lg hover:scale-105 text-center ease-in-out">
          <div className="mb-4">
            <img src="/road-trip.png" alt="Personalize Your Adventure" className="mx-auto w-16 h-16" />
          </div>
          <h3 className="text-xl font-bold mb-2">Personalize Your Adventure</h3>
          <p className="text-gray-600">
            Shape your journey by freely adding, editing, or deleting activities from your itinerary.
          </p>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer  border border-gray-300 transition-transform transform hover:shadow-lg hover:scale-105 text-center ease-in-out">
          <div className="mb-4">
            <img src="/vacation.png" alt="Local Cuisine Recommendations" className="mx-auto w-16 h-16" />
          </div>
          <h3 className="text-xl font-bold mb-2">Local Cuisine Recommendations</h3>
          <p className="text-gray-600">
            Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Middle;
