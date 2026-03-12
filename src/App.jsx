import React from 'react'
import Card from './Components/Card'
import ProductCard from './ProductCard'


const App = () => {
//   const data = [
//   { "id": 1,
//     "photo": "https://i.pinimg.com/736x/43/d3/09/43d309d0c66fd9fd1e9fb2baa18b8708.jpg",
//     "juice_name": "Kiwi Juice",
//     "ingredients": ["Kiwi", "Milk", "Ice"],
//     "price": 12
//   },
//   { "id": 2,
//     "photo": "https://i.pinimg.com/736x/ae/26/44/ae2644aae725fda52fc93d4d1351ebc3.jpg",
//     "juice_name": "Orange Juice",
//     "ingredients": ["Orange", "Ice", "Sugar"],
//     "price": 10
//   },
//   { "id": 3,
//     "photo": "https://i.pinimg.com/1200x/8b/e9/87/8be9874ab94e7ffb3d97367382cd687f.jpg",
//     "juice_name": "Strawberry Juice",
//     "ingredients": ["Strawberry", "Milk", "Honey"],
//     "price": 14
//   },
//   { "id": 4,
//     "photo": "https://i.pinimg.com/736x/3a/2d/64/3a2d648b2afd69b7939e1fe5653bd0ee.jpg",
//     "juice_name": "Mango Juice",
//     "ingredients": ["Mango", "Ice", "Sugar"],
//     "price": 11
//   },
//   { "id": 5,
//     "photo": "https://i.pinimg.com/1200x/af/e3/78/afe378727130a4df11d421561d03aa86.jpg",
//     "juice_name": "Pineapple Juice",
//     "ingredients": ["Pineapple", "Ice", "Mint"],
//     "price": 13
//   },
//   { "id": 6,
//     "photo": "https://i.pinimg.com/1200x/e0/e4/b2/e0e4b240136422c9f0771f6f62abd2fc.jpg",
//     "juice_name": "Watermelon Juice",
//     "ingredients": ["Watermelon", "Ice", "Mint"],
//     "price": 9
//   },
//   { "id": 7,
//     "photo": "https://i.pinimg.com/1200x/68/21/96/682196eabce95c2292e600b2f2fbcbc6.jpg",
//     "juice_name": "Apple Juice",
//     "ingredients": ["Apple", "Ice", "Honey"],
//     "price": 10
//   },
//   { "id": 8,
//     "photo": "https://i.pinimg.com/736x/f3/ad/f9/f3adf983bf318348acc7480010ba4f40.jpg",
//     "juice_name": "Banana Shake",
//     "ingredients": ["Banana", "Milk", "Honey"],
//     "price": 12
//   },
//   { "id": 9,
//     "photo": "https://i.pinimg.com/736x/45/58/4f/45584fc3f3753fc8c74dbb4fc66452e7.jpg",
//     "juice_name": "Avocado Smoothie",
//     "ingredients": ["Avocado", "Milk", "Honey"],
//     "price": 15
//   },
//   { "id": 10,
//     "photo": "https://i.pinimg.com/1200x/40/23/39/402339b7da35eb9446b3bfff0bdcc8b8.jpg",
//     "juice_name": "Mixed Fruit Juice",
//     "ingredients": ["Apple", "Mango", "Orange"],
//     "price": 16
//   }
// ];
 const Product = [
  {
    "product_photo": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    "company_logo": "logos/sony.png",
    "product_name": "Sony WH-1000XM5 Headphones",
    "price": 34999,
    "tagline": "Silence the world",
    "details": "Premium wireless headphones with industry-leading noise cancellation and crystal-clear sound."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    "company_logo": "logos/apple.png",
    "product_name": "Apple Watch Series 9",
    "price": 41900,
    "tagline": "Future on your wrist",
    "details": "Luxury smartwatch with powerful health tracking and stunning always-on Retina display."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    "company_logo": "logos/jbl.png",
    "product_name": "JBL Charge 5 Speaker",
    "price": 15999,
    "tagline": "Powerful cinematic sound",
    "details": "Portable Bluetooth speaker delivering deep bass and powerful sound with long battery life."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38",
    "company_logo": "logos/logitech.png",
    "product_name": "Logitech G Pro Gaming Mouse",
    "price": 8999,
    "tagline": "Precision in every move",
    "details": "Professional esports gaming mouse with ultra-fast response and precise tracking sensor."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    "company_logo": "logos/samsonite.png",
    "product_name": "Samsonite Pro Backpack",
    "price": 6999,
    "tagline": "Travel like a professional",
    "details": "Premium laptop backpack with sleek design and durable materials for everyday travel."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
    "company_logo": "logos/corsair.png",
    "product_name": "Corsair RGB Mechanical Keyboard",
    "price": 18999,
    "tagline": "Feel the power of keys",
    "details": "High-performance mechanical keyboard with immersive RGB lighting and precision switches."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
    "company_logo": "logos/xiaomi.png",
    "product_name": "Xiaomi Smart Band 8",
    "price": 4999,
    "tagline": "Track every heartbeat",
    "details": "Elegant fitness tracker with AMOLED display and advanced health monitoring."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    "company_logo": "logos/anker.png",
    "product_name": "Anker USB-C Power Hub",
    "price": 4999,
    "tagline": "One hub. Endless power",
    "details": "Premium USB-C hub offering multiple ports, fast data transfer, and sleek aluminum design."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1601737487795-dab272f52420",
    "company_logo": "logos/samsung.png",
    "product_name": "Samsung Portable SSD T7",
    "price": 14999,
    "tagline": "Speed meets elegance",
    "details": "Ultra-fast portable SSD with secure storage and compact metallic design."
  },
  {
    "product_photo": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    "company_logo": "logos/philips.png",
    "product_name": "Philips Smart LED Desk Lamp",
    "price": 3999,
    "tagline": "Light your creativity",
    "details": "Modern LED desk lamp with adjustable brightness and eye-care lighting technology."
  }
]
 return (
<>
  {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
 
   {data.map(function(juice) {  
  return <Card data={juice} key={juice.id} />;
})}
  </section> */}

 <section className="flex items-center flex-wrap py-4 px-6 gap-6 justify-center">
   
   {Product.map(function (data) {
    return <ProductCard data={data} />;
   })}
 </section>
  </>
  )
}

export default App