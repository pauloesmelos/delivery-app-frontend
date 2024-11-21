import React from 'react';

const CardFood = ({ name, category, image, price, restaurant, amount, date, delivery, online, handleOpenModal }) => {
  const food = { name, category, image, price, restaurant, amount, date, delivery, online };

  return (
    <div
      onClick={() => handleOpenModal(food)}
      className="bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg duration-150 hover:animateScale
      hover:shadow-neutral-300"
    >
      <div className="h-[300px]">
        <img 
            className="object-cover w-full h-full brightness-75 rounded-t-md duration-200" 
            src={image} 
            alt={category} 
            title={category}
        />
      </div>
      <div className="p-4 w-full flex items-center justify-between">
        <p className="text-slate-800 font-semibold">
            {name}
        </p>
        <span className="font-bold text-xl text-orange-600">
            {price}
        </span>
      </div>
    </div>
  )
}

export default CardFood;