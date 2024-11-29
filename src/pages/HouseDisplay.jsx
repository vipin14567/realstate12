import React from 'react';

const HouseDisplay = ({ image, location, name }) => {
  return (
    <div className="flex flex-col bg-gray-50 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 relative top-20">
      {/* House Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-56 rounded-t-xl object-cover"
      />

      {/* House Details */}
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
          {name}
        </h2>
        <h3 className="text-sm text-gray-600 text-center">
          📍 {location}
        </h3>
      </div>
    </div>
  );
};

export default HouseDisplay;
