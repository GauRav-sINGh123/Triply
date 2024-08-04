import React from 'react';

import visa from '/visa.png'; 
import spotifyLogo from '/spotify.png';
import mastercard from '/mastercard.png';
import googleLogo from '/google.png';
import amazonLogo from '/amazon.png';
import maestro from '/maestro.png';
import icici from '/icici.png';
import yatra from '/yatra.png';

 

const brands = [
  { name: 'visa', logo: visa },
  { name: 'spotify', logo: spotifyLogo },
  { name: 'maestro', logo: maestro },
  { name: 'google', logo: googleLogo },
  { name: 'amazon', logo: amazonLogo },
  { name: 'mastercard', logo: mastercard },
  { name: 'icici', logo: icici },
  {name:'yatra',logo:yatra}
  
];

const TrustedBrands = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Trusted by</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            More than 50+ brands trust us
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-8  ">
            {brands.map((brand) => (
              <div key={brand.name} className="flex justify-center">
                <img className="h-12" src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
