import React from 'react';

const CardCategory = ({ name, image }) => {
  return (
    <div className="bg-white flex items-center p-3 rounded-lg hover:bg-neutral-200 md:hover:scale-[1.05] lg:hover:scale-[1.1] duration-200
    shadow-md cursor-pointer">
      <div className="w-full">
        <img 
            className="object-cover w-[80px]"
            src={image} 
            alt={name} 
            title={name}
         />
      </div>
      <div className="w-full">
        <h4 className="font-semibold text-slate-800">
            {name}
        </h4>
      </div>
    </div>
  )
}

export default CardCategory;