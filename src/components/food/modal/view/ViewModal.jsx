import React from 'react';
import { FaCircle } from "react-icons/fa";
import { FaRegFaceSadTear, FaRegFaceSmileWink } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const ViewModal = ({ state, onClick, json }) => {
  const { image, name, category, price, date, restaurant, amount, delivery, online } = json;
  const [unit, setUnit] = React.useState(0);
  React.useEffect(() => {
    console.log(unit);
  }, [unit]);
  
  return (
    <div className="w-full">
      <div className="w-full max-w-[1000px] mx-auto px-5">
        <div className="w-full bg-white grid grid-cols-2 gap-10 p-4 relative">
          {/* containers */}
          <div>
            <img 
              className="object-cover h-[400px] w-[350px]" 
              src={image} 
              alt={name} 
              title={name}
            />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-sm text-slate-700 text-center">
                  {name}
                </h3>
              </div>
              <div className="w-full font-bold tracking-wide flex justify-between">
                <p className="font-bold">
                  Reustaurant: {restaurant}
                </p>
                <div>
                  { online ? (
                    <div className="flex items-center gap-1">
                      <FaCircle size={15} className="text-emerald-600 animatePisca" />
                      <span className="p-1 text-[.7rem] bg-emerald-600/20 text-emerald-600 font-bold rounded-xl">
                        Online
                      </span>
                    </div>) : (
                    <div className="flex items-center gap-1">
                      <FaCircle size={15} className="text-rose-600 animatePisca" />
                      <span className="p-1 text-[.7rem] bg-rose-600/20 text-rose-600 font-bold rounded-xl">
                        Offline
                      </span>
                    </div>
                    )
                  }
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <MdDateRange />
                Since {date}
              </span>
              <p className="text-3xl text-slate-800">
                $ {amount}
              </p>
              <div className="w-full flex justify-between items-center">
                <p>
                  { delivery  ? (
                    <span className="p-1 bg-emerald-600/10 text-emerald-600 flex items-center gap-2 text-sm rounded-lg">
                      Delivering in your region
                      <FaRegFaceSmileWink size={25} className="text-emerald-600" />
                    </span>
                  ) : (
                    <span className="p-1 bg-rose-600/10 border text-rose-600 flex items-center gap-2 text-sm rounded-lg">
                      Not Delivering in your region
                      <FaRegFaceSadTear size={25} className="text-rose-600" />
                    </span>
                  )}  
                </p>
              </div>
              <div className="mt-10 w-full flex justify-center gap-8">
                  <div className="p-3 rounded-lg border flex items-center gap-4">
                    <button
                    onClick={() => setUnit(value => value - 1)}
                    className="font-bold text-emerald-600 cursor-pointer text-3xl"
                    >
                      -
                    </button>
                    <div className="text-xl font-semibold">
                      {unit}
                    </div>
                    <div
                    onClick={() => setUnit(value => value + 1)}
                    className="font-bold text-emerald-600 cursor-pointer text-3xl"
                    >
                      +
                    </div>
                  </div>
                  <button className="px-4 py-2 w-full bg-emerald-600 text-white font-medium rounded-lg hover:opacity-50 duration-150">
                    Adicionar $ {unit * amount}
                  </button>
              </div>
            </div>
          </div>
          <IoMdClose 
            className="absolute top-1 right-1 text-slate-600 hover:text-orange-600 duration-150 cursor-pointer" 
            size={30}
            onClick={() => onClick(null)}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewModal;