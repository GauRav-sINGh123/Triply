import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-42 mx mx gap-8 mt-6">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center gap-6 lg:w-1/2">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 md:text-6xl xl:text-7xl">
          Discover the Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">Travel Planning</span>
        </h2>
        <p className="mx-auto  max-w-2xl text-center text-gray-700 mt-1 sm:text-base md:mt-2 md:text-md xl:text-lg">
          Generate seamless travel planning with Trip Planner AI.  
        </p>
       <Link to="/createtrip">
       <Button className=" rounded-full px-6 py-6 hover:scale-105 transition-all ease-in-out text-lg font-bold">
          Create Your Trip
        </Button>
       </Link>
      </div>
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img src="/landing.png" alt="Trip Planner" className="w-full sm:w-[350px] md:w-[450px] lg:w-[530px] h-auto pointer-events-none " />
      </div>
    </div>
  );
}

export default Hero;
