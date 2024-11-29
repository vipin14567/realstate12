import React from 'react';
import { houseData } from '../assets/assets';
import HouseDisplay from './HouseDisplay';


const House = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col bg-gray-600">
      

      {/* House Cards Section */}
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {houseData.map((item, index) => (
          <HouseDisplay
            key={index}
            image={item.image}
            location={item.location}
            name={item.OwnerName}
          />
        ))}
      </div>
    </div>
  );
};

export default House;
