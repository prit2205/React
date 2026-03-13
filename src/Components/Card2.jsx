import { ArrowRight, DollarSign } from "lucide-react";
import React from "react";

const Card2 = ({ data }) => {

  if (!data) return null;

  return (
    <div className="bg-white p-4 rounded-3xl border w-72 shadow-md hover:shadow-xl transition">

      {/* Image Section */}
      <div className="bg-gray-200 w-full h-60 rounded-2xl relative overflow-hidden">

        <img
          className="w-full h-full object-cover rounded-2xl"
          src={data.image}
          alt={data.name}
        />

        <p className="absolute top-3 left-3 bg-white rounded-full px-3 text-black text-sm">
          {data.badge}
        </p>

        <img
          src={data.logo}
          className="w-10 h-10 rounded-full bg-white absolute top-3 right-3 object-contain p-1"
        />
      </div>

      {/* Product Info */}
      <h1 className="text-lg font-bold mt-3">{data.name}</h1>
      <p className="text-gray-500">{data.tagline}</p>
      <p className="text-gray-600 text-sm mt-1">{data.description}</p>

      {/* Footer */}
      <div className="flex justify-between mt-4 items-center">

        <p className="bg-black text-white py-1 px-4 rounded-full flex items-center gap-1 text-sm">
          <DollarSign size={16}/> {data.price}
        </p>

        <button className="flex gap-1 items-center bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">
          Buy Now <ArrowRight size={16}/>
        </button>

      </div>

    </div>
  );
};

export default Card2;