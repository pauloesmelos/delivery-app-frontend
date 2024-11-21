import React from 'react';
import { FaCity, FaUsers } from "react-icons/fa";
import { IoIosHelpCircle, IoMdCash, IoMdClose } from "react-icons/io";
import { MdAccountBalanceWallet, MdFavorite } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const MobileMenu = ({ onClick, state }) => {
  const style = {
    menu: {
        active: "fixed top-0 left-0 w-full  max-w-[300px] h-screen bg-white shadow-md shadow-slate-700 duration-300 ease-linear ml-0 z-[100]",
        notActive: "fixed top-0 left-0 w-full  max-w-[300px] h-screen bg-white shadow-md shadow-slate-700 duration-300 ease-linear ml-[-100%] z-[100]"
    }
  }
  return (
    <div className={state ? style.menu.active : style.menu.notActive}>
        <div className="w-full p-2">
            {/* cabeçalho */}
            <div className="flex items-center justify-between">
                <h1 className="text-neutral-700 text-3xl z-[100]">
                    <span className="font-bold">
                        Delivery
                    </span> 
                    BR
                </h1>
                <IoMdClose 
                    size={35} 
                    className="text-neutral-700 cursor-pointer hover:text-orange-400 duration-150"
                    onClick={onClick}
                />
            </div>
            {/* nav */}
            <div className="pt-8">
                <ul className="w-full flex flex-col gap-4 text-neutral-700 text-lg">
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <TbTruckDelivery />
                            Orders
                        </a>
                    </li>
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <MdFavorite />
                            Favorites
                        </a>
                    </li>
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <MdAccountBalanceWallet />
                            Cashback
                        </a>
                    </li>
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <IoIosHelpCircle />
                            Help
                        </a>
                    </li>
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <IoMdCash />
                            Promotions
                        </a>
                    </li>
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <FaCity />
                            All Restaurants
                        </a>
                    </li>
                    <li className="hover:bg-neutral-200 rounded-lg p-2">
                        <a className="flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                            <FaUsers />
                            Invite Friends
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu;