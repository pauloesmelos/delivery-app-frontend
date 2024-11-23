import React from 'react';
import { BsEmojiDizzy } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { GlobalCart } from '../../../../global/cart/GlobalCart';

const ViewModal = ({ onClick, json, toastify }) => {
  const { addProductCart, handleCountProducts } = React.useContext(GlobalCart);
  const { image, name, category, date, restaurant, amount, delivery, online } = json;
  const [unit, setUnit] = React.useState(0);
  const [erro, setErro] = React.useState("");

  const handleAddProduct = (operation) => {
    if(unit > 0) {
      handleCountProducts(operation);
      addProductCart(json);
      onClick(null);
      toastify();
      setErro("");
    }
    else {
      setErro("Add a product");
    }
  }
  
  return (
    <div className="w-full z-50">
      <div className="w-full max-w-[1000px] mx-auto px-5">
        <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2 gap-10 p-4 relative rounded-lg">
          {/* containers */}
          <div className="h-[400px] w-[350px] overflow-hidden hidden md:block">
            <img 
              className="object-cover h-[400px] w-[350px] hover:scale-[1.2] duration-300 ease-linear brightness-90" 
              src={image} 
              alt={name} 
              title={name}
            />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-sm text-neutral-500 text-center">
                  {name}
                </h3>
              </div>
              <div className="w-full font-bold tracking-wide flex justify-between">
                <p className="font-semibold text-lg">
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
              <span className="flex items-center gap-1 text-[.8rem] text-neutral-500">
                <MdDateRange />
                Since {date}
              </span>
              <p className="p-2 px-6 py-2 w-[100px] text-sm bg-orange-600 text-white rounded-lg my-2">
                #{category}
              </p>
              <p className="text-4xl text-slate-800">
                {Number.parseFloat(amount).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </p>
              <div className="w-full flex justify-between items-center">
                <p className="mt-5">
                  { delivery  ? (
                    <span className="p-1 bg-emerald-600/10 border text-emerald-600 flex items-center gap-2 text-sm rounded-lg px-5 border-emerald-600">
                      Delivering in your region
                      <FaRegFaceSmileWink size={20} className="text-emerald-600" />
                    </span>
                  ) : (
                    <span className="p-1 bg-rose-600/10 border text-rose-600 flex items-center gap-2 text-sm rounded-lg px-5 border-rose-600">
                      Not Delivering in your region
                      <BsEmojiDizzy size={20} className="text-rose-600" />
                    </span>
                  )}  
                </p>
              </div>
              <div className="mt-10 mb-5 w-full flex justify-center gap-8">
                  <div className="w-[150px] p-2 rounded-lg border flex items-center gap-4">
                    <button
                    onClick={() => unit - 1 > 0 ? setUnit(value => value - 1) : setUnit(0)}
                    className={unit > 0 ? "font-bold text-emerald-600 cursor-pointer text-3xl" : "font-bold text-emerald-600 text-3xl cursor-not-allowed"}
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
                  <div className="w-full">
                    <button
                      onClick={() => handleAddProduct("add")}
                      className="px-12 py-4 w-[80%] bg-emerald-600 text-white font-medium rounded-lg hover:opacity-50 duration-150
                      flex items-center justify-between"
                    >
                      Adicionar 
                      <span>
                        {(unit * amount).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD"
                        })}
                      </span>
                    </button>
                    { erro && 
                      <span className="text-sm text-rose-600 absolute mt-2">
                        *{erro}
                      </span>
                    }
                  </div>
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