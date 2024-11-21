import React from 'react';

const CardHero = ({ icon, description, id }) => {
  return (
    <div className={id < 2 ? "flex flex-col gap-3 border-r-2 px-4" : "flex flex-col gap-3 px-4"}>
      <div className="text-orange-600 text-2xl flex items-center justify-center">
        {icon}
      </div>
      <p className="text-neutral-400 text-center text-[.9rem]">
        {description}
      </p>
    </div>
  )
}

export default CardHero;