import React from 'react'

const ProductCard = () => {
  return (
    <>
    <div className="card bg-white rounded-4xl p-2 w-full max-w-sm overflow-hidden shadow-2xl">
        <img src="https://i.pinimg.com/736x/90/1e/ec/901eec6ede6676e56e5be404be89b9ae.jpg" alt="" className="w-full h-84 object-cover rounded-4xl border-5 border-red-600"/>

        <div className="content px-4 py-3">
            <h1 className="font-extrabold text-2xl">Nike Airforce1 Premium</h1>
            <p className="font-bold text-xl text-gray-300">Own the Airforce</p>
            <p>step back into classic hoops style with a durable leather.</p>

            <div className="price">
                <h1>$120</h1>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard
