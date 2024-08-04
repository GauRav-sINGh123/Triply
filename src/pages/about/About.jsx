import React from "react";

function About() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="/about.png" alt="About" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Discover the ultimate travel experience with our AI-powered trip
            planner. Whether you're seeking adventure, relaxation, or a bit of
            both, our intelligent system customizes your itinerary to match your
            preferences. From finding the best flights and accommodations to
            suggesting hidden gems and local hotspots, let our AI take the
            stress out of planning so you can focus on making memories.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
