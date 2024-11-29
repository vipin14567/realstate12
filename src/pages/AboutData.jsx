import React from 'react';
import { aboutData } from '../assets/assets';


const AboutData = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col bg-gray-700">
        
        <div>
        {aboutData.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-6 relative top-20">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 md:h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 w-full md:w-2/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
        </div>
     
    </div>
  );
};

export default AboutData;
