import React from 'react';
import { FaCircle } from "react-icons/fa";
import { FaRegFaceSadTear, FaRegFaceSmileWink } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const ViewModal = ({ state, onClick, json }) => {
  const { image, name, category, price, date, restaurant, amount, delivery, online } = json;

  return (
    <div className="w-full">
      <div className="w-full max-w-[1000px] mx-auto px-5">
        <div className="w-full bg-white grid grid-cols-2 gap-10 p-4 relative">
          {/* containers */}
          <div>
            <img 
              className="object-cover h-[400px]" 
              src={image} 
              alt={name} 
              title={name}
            />
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-sm text-slate-700 text-center">
                  {name}
                </h3>
              </div>
              <p className="font-bold tracking-wide">
                Served by: {restaurant}
              </p>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <MdDateRange />
                Since {date}
              </span>
              <p className="text-2xl">
                $ {amount}
              </p>
              <div className="w-full flex justify-between items-center">
                <p>
                  { delivery  ? (
                    <span className="p-2 bg-white border text-emerald-600 flex items-center gap-2">
                      Delivering in your region
                      <FaRegFaceSmileWink size={25} className="text-emerald-600" />
                    </span>
                  ) : (
                    <span className="p-2 bg-white border text-rose-600">
                      Not Delivering in your region
                      <FaRegFaceSadTear size={25} className="text-emerald-600" />
                    </span>
                  )}  
                </p>
                { online ? <FaCircle size={25} className="text-emerald-600" /> : <FaCircle size={25} className="text-rose-600" />}
              </div>
              <div className="mt-10 w-full flex justify-center">
                  <div>
                    + -
                  </div>
                  <button className="px-4 py-2 w-full bg-emerald-600 text-white font-medium rounded-lg hover:opacity-50 duration-150">
                    Adicionar $ 0,00
                  </button>
              </div>
            </div>
          </div>
          <IoMdClose 
            className="absolute top-1 right-1 text-slate-600 hover:text-orange-600 duration-150 cursor-pointer" 
            size={30}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewModal;