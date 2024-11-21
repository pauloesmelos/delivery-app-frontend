import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-orange-600">
      <div className="w-full max-w-[1200px] mx-auto p-5">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3">
          <div className="p-10 sm:p-0 md:py-8 lg:py-0">
            <h1 className="text-4xl font-bold text-white">DeliveryBR</h1>
            <img 
              src={Logo} 
              alt="Logo App" 
              title="Logo App" 
              className="w-[150px] object-cover mt-5"
            />
          </div>
          <div className="grid p-10 sm:p-0 grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-0 lg:grid-cols-4 col-span-2 mt-16 md:mt-0">
            <div className="flex flex-col gap-8">
              <h4 className="text-neutral-800 text-lg font-bold">About</h4>
              <ul className="flex flex-col gap-5 text-white">
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-150" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Help me
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-150" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-150" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Commerce
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-150" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-neutral-800 text-lg font-bold">Support</h4>
              <ul className="flex flex-col gap-5 text-white">
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-150" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-neutral-800 text-lg font-bold">Company</h4>
              <ul className="flex flex-col gap-5 text-white">
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-neutral-300 duration-300" 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="text-neutral-800 text-lg font-bold">Social</h4>
              <div className="flex items-center gap-5">
                <button>
                  <FaYoutube 
                    className="text-white hover:opacity-70 hover:scale-110 duration-150" 
                    size={30} />
                </button>
                <button>
                  <FaWhatsapp 
                    className="text-white hover:opacity-70 hover:scale-110 duration-150" 
                    size={30} />
                </button>
                <button>
                  <FaInstagram 
                    className="text-white hover:opacity-70 hover:scale-110 duration-150" 
                    size={30} />
                </button>
                <button>
                  <FaFacebook 
                    className="text-white hover:opacity-70 hover:scale-110 duration-150"
                    size={30} />
                </button>
                <button>
                  <FaPinterest 
                    className="text-white hover:opacity-70 hover:scale-110 duration-150" 
                    size={30}
                  />
                </button>
              </div>
              <button className="bg-white text-black rounded-md px-4 py-2 w-[150px] hover:bg-neutral-200 duration-150">
                Download APP
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* cnpj */}
      <div className="w-full p-3 bg-neutral-100 mt-5">
        <p className="text-orange-600 font-bold text-sm text-center">
          DeliveryBR TECH LTDA. - CNPJ: 12.123.123/1234-12
        </p>
      </div>
    </footer>
  )
}

export default Footer;