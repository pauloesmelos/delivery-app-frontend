import React from 'react';

const SearchResults = ({ items }) => {
  return (
    <div className="absolute top-12 lg:left-0 left-[-90px] lg:w-[500px] bg-white border z-[100] shadow-md shadow-black">
      <div className="w-full p-2 lg:p-4">
        <div>
            {items.map((e, i) => (
                <div key={i * Math.random()} className="hover:bg-neutral-200 p-2 cursor-pointer flex items-center gap-6 lg:gap-12">
                    <div className="w-[60px] h-[50px] lg:w-[100px] lg:h-[80px]">
                      <img src={e.image} className="object-cover w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <p className="lg:text-lg font-medium">
                          {e.name}
                      </p>
                      <span className="lg:text-lg font-medium">
                          {Number.parseFloat(e.amount).toLocaleString("en-US",{
                              style: "currency",
                              currency: "USD"
                          })}
                      </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResults;