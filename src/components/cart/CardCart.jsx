import React from 'react';

const CardCart = ({ image, name, amount }) => {
  return (
    <div className="w-full p-4">
      <div className="w-full flex items-center justify-between">
        <div className="w-[100px] h-[100px]">
            <img 
                className="object-cover w-full h-full rounded-lg" 
                src={image} 
                alt={name} 
                title={name}
            />
        </div>
        <div className="flex flex-col gap-2">
            <h4 className="font-bold">
                {name}
            </h4>
            <div className="flex items-center gap-10">
                <button className="text-blue-500 font-medium hover:border-b hover:border-b-blue-500">
                    Excluir
                </button>
                <button className="text-blue-500 font-medium hover:border-b hover:border-b-blue-500">
                    Salvar
                </button>
            </div>
        </div>
        <div>
            <p className="font-bold text-2xl text-rose-600">
                {Number.parseFloat(amount).toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD"
                })}
            </p>
        </div>
      </div>
    </div>
  )
}

export default CardCart;