import React from 'react';

const CardHeadline = ({ restaurant, inclusionDate, img }) => {
  return ( 
    <div className="relative group">
        {/* overlay and descriptions */}
      <div className="absolute top-0 left-0 w-full h-[180px] bg-black/80 p-6 rounded-lg flex flex-col gap-5">
        <p className="text-xl font-bold text-white tracking-wide">
            {restaurant}
        </p>
        <span className="text-sm text-neutral-400">
            {inclusionDate}
        </span>
        <button className="px-6 py-2 bg-white rounded-lg text-neutral-800 font-medium border-2 border-neutral-800
        group-hover:bg-orange-600 group-hover:text-white duration-150">
            Order Now
        </button>
      </div>
      <div className="w-full">
        <img 
            className="object-cover w-full max-h-[180px] rounded-lg" 
            alt={restaurant} 
            title={restaurant} 
            src={img}
        />
      </div>
    </div>
  )
}

export default CardHeadline;