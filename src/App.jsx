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
  return (
<>
  {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
 
   {data.map(function(juice) {  
  return <Card data={juice} key={juice.id} />;
})}
  </section> */}

  <ProductCard />
  </>
  )
}

export default App