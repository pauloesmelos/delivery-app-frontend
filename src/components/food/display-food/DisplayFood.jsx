import React from 'react';
import { MdNoFood } from "react-icons/md";
import CardFood from '../card-food/CardFood';

const DisplayFood = ({ items, handleOpenModal }) => {
  if(items.length === 0)
    return (
        <p className="text-orange-600 text-2xl font-bold py-20 flex gap-2 items-center">
            <MdNoFood />
            No results found.
        </p>
    )
  return (
    <div className="w-full pt-10">
      <div className="w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((food) => (
                <CardFood 
                  key={food.id * Math.random()} 
                  handleOpenModal={handleOpenModal} 
                  {...food}
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayFood;