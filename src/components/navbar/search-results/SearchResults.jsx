import React from 'react';

const SearchResults = ({ items }) => {
  return (
    <div className="absolute top-12 lg:left-0 left-[-90px] w-[300px] bg-white border z-[100] shadow-md shadow-black">
      <div className="w-full p-2">
        <div>
            {items.map((e, i) => (
                <div key={i * Math.random()} className="hover:bg-neutral-200 p-2 cursor-pointer flex justify-between">
                    <p>
                        {e.name}
                    </p>
                    <span>
                        {Number.parseFloat(e.amount).toLocaleString("en-US",{
                            style: "currency",
                            currency: "USD"
                        })}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResults;