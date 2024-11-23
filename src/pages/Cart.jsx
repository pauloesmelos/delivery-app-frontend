import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardCart from '../components/cart/CardCart';
import { GlobalCart } from '../global/cart/GlobalCart';

const Cart = () => {
  const { cart, getTotalCart } = React.useContext(GlobalCart);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!cart.length) {
      navigate("/");
    }
  }, [cart]);
  return (
    <div className="w-full h-screen bg-neutral-200">
      <div className="w-full h-full max-w-[1300px] mx-auto px-5">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 relative">
            <div className="absolute top-[-50px] left-0">
              <Link 
                to="/" 
                className="px-8 py-2 bg-orange-600 text-white font-medium rounded-md duration-150 hover:opacity-75"
              >
                Back
              </Link>
            </div>
            {/* container 1 */}
            <div className="w-full bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full border-b p-2">
                <h2 className="font-bold text-slate-800 text-xl">Your Products</h2>
              </div>
              <div>
                {
                  cart.map((food, index) => (
                    <CardCart 
                      key={index * Math.random()} 
                      {...food}
                    />
                  ))
                }
              </div>
            </div>
            {/* container 2 */}
            <div className="w-[50%] h-[250px] bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full border-b p-2">
                <h2 className="font-bold text-slate-800 text-xl">Resume total</h2>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <div className="w-full flex items-center justify-between">
                  <p>Products {`(${cart.length})`}</p>
                  <span>
                    {getTotalCart().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD"
                    })}
                  </span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Frete</p>
                  <span className="text-sm text-emerald-500">Free</span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <h4 className="font-bold">Total</h4>
                  <span className="font-bold">
                    {getTotalCart().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD"
                    })}
                  </span>
                </div>
                <button className="font-medium text-white bg-blue-500 rounded-md px-6 py-2 w-full border border-blue-500
                hover:bg-white hover:text-blue-500 duration-150">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;