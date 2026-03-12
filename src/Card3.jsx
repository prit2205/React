import { ChevronLeft, EllipsisVertical, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Card3 = ({ data }) => {

  const [qty, setQty] = useState(1);

  if (!data) return null;

  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="w-80 bg-stone-200 rounded-3xl shadow-xl relative overflow-hidden">

      {/* Top section */}
      <div className="relative">
        <div className="w-full h-56 bg-red-500 rounded-b-[50%]"></div>

        <div className="absolute bg-white h-10 w-10 top-5 left-5 rounded-full flex justify-center items-center shadow">
          <ChevronLeft />
        </div>

        <div className="absolute bg-white h-10 w-10 top-5 right-5 rounded-full flex justify-center items-center shadow">
          <EllipsisVertical />
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center -mt-28">
        <img
          src={data.image}
          alt={data.name}
          className="h-40 rotate-12 drop-shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-6">

        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{data.name}</h1>
          <p className="text-red-600 font-semibold">{data.price}</p>
        </div>

        <p className="text-gray-500 text-sm">{data.category}</p>

        <div className="flex gap-3 my-3">
          <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
            Details
          </button>

          <button className="bg-white border px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white">
            Reviews
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {data.description}
        </p>

        <div className="flex justify-between items-center">

          {/* Quantity */}
          <div className="flex gap-3 items-center">

            <button
              onClick={decrease}
              className="bg-black text-white h-9 w-9 rounded-full flex items-center justify-center"
            >
              <Minus size={18} />
            </button>

            <p className="text-xl font-semibold">{qty}</p>

            <button
              onClick={increase}
              className="bg-black text-white h-9 w-9 rounded-full flex items-center justify-center"
            >
              <Plus size={18} />
            </button>

          </div>

          {/* Cart */}
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Card3;