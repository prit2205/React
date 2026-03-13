import React from 'react'
import Card from './Components/Card'
import ProductCard from './Components/ProductCard'
import Card3 from './Components/Card3'
import Card2 from './Components/Card2'

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

//  const Product = [
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-nike-icon-svg-download-png-202653.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Nike Air Zoom Pegasus",
//     "price": "$120",
//     "tagline": "Run faster, feel lighter",
//     "details": "Lightweight running shoes with responsive cushioning and breathable mesh upper."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-adidas-icon-svg-download-png-2673953.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Adidas Ultraboost",
//     "price": "$180",
//     "tagline": "Energy in every step",
//     "details": "Premium running shoes with boost cushioning and flexible knit upper."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-puma-icon-svg-download-png-2673893.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Puma RS-X Sneakers",
//     "price": "$110",
//     "tagline": "Bold style meets comfort",
//     "details": "Chunky sneakers with cushioned midsole and durable rubber outsole."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-new-icon-svg-download-png-282520.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
//     "product_name": "New Balance 574",
//     "price": "$95",
//     "tagline": "Classic comfort",
//     "details": "Everyday sneakers with suede mesh upper and cushioned support."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-asics-icon-svg-download-png-282909.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80",
//     "product_name": "ASICS Gel-Kayano",
//     "price": "$160",
//     "tagline": "Stability for runners",
//     "details": "High-performance running shoes with gel cushioning technology."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-reebok-icon-svg-download-png-282489.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Reebok Nano X",
//     "price": "$130",
//     "tagline": "Train without limits",
//     "details": "Durable training shoes designed for gym and cross training."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-under-icon-svg-download-png-282154.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Under Armour HOVR",
//     "price": "$150",
//     "tagline": "Feel the energy return",
//     "details": "Advanced running shoes with HOVR cushioning for smooth movement."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-vans-icon-svg-download-png-202702.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Vans Old Skool",
//     "price": "$70",
//     "tagline": "Classic skate style",
//     "details": "Iconic skate shoes with canvas upper and signature side stripe."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-converse-icon-svg-download-png-202557.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Converse Chuck Taylor",
//     "price": "$65",
//     "tagline": "Timeless sneaker icon",
//     "details": "Classic canvas sneakers with rubber toe cap and vintage design."
//   },
//   {
//     "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-converse-logo-icon-svg-download-png-2854234.png?f=webp&w=256",
//     "product_photo": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
//     "product_name": "Skechers Go Walk",
//     "price": "$85",
//     "tagline": "Comfort in every step",
//     "details": "Lightweight walking shoes with breathable mesh and cushioned sole."
//   }
// ]

//  const foods = [
//   {
//     "id": 1,
//     "name": "Hamburger",
//     "category": "Burger",
//     "price": "₹250",
//     "description": "Juicy grilled hamburger with fresh lettuce, cheese and signature sauce.",
//     "image": "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png"
//   },
//   {
//     "id": 2,
//     "name": "Pepperoni Pizza",
//     "category": "Pizza",
//     "price": "₹420",
//     "description": "Classic pepperoni pizza topped with mozzarella and tomato sauce.",
//     "image": "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_9221595.png"
//   },
//   {
//     "id": 3,
//     "name": "Alfredo Pasta",
//     "category": "Pasta",
//     "price": "₹320",
//     "description": "Rich and creamy Alfredo pasta with parmesan cheese.",
//     "image": "https://png.pngtree.com/png-clipart/20250501/original/pngtree-rich-chicken-alfredo-fettuccine-in-creamy-parmesan-sauce-with-herb-garnish-png-image_20924405.png"
//   },
//   {
//     "id": 4,
//     "name": "Chicken Sandwich",
//     "category": "Sandwich",
//     "price": "₹220",
//     "description": "Grilled chicken sandwich with lettuce and mayo.",
//     "image": "https://static.vecteezy.com/system/resources/previews/054/952/459/non_2x/a-mouthwatering-chicken-sandwich-layered-with-fresh-lettuce-and-ripe-tomatoes-on-toasted-bread-a-delicious-chicken-sandwich-with-fresh-lettuce-and-juicy-tomatoes-transparent-background-free-png.png"
//   },
//   {
//     "id": 5,
//     "name": "French Fries",
//     "category": "Snacks",
//     "price": "₹150",
//     "description": "Crispy golden french fries with a pinch of salt.",
//     "image": "https://png.pngtree.com/png-vector/20250424/ourmid/pngtree-hot-and-crispy-french-fries-in-red-box-png-image_16097148.png"
//   },
//   {
//     "id": 6,
//     "name": "Chocolate Donut",
//     "category": "Dessert",
//     "price": "₹120",
//     "description": "Soft donut topped with rich chocolate glaze.",
//     "image": "https://png.pngtree.com/png-clipart/20241005/original/pngtree-chocolate-donut-isolated-on-transparent-background-png-image_16209821.png"
//   },
//   {
//     "id": 7,
//     "name": "Iced Coffee",
//     "category": "Drink",
//     "price": "₹180",
//     "description": "Cold brewed coffee served with ice and cream.",
//     "image": "https://png.pngtree.com/png-clipart/20241110/original/pngtree-isolate-iced-coffee-on-a-white-transparent-background-png-image_16857863.png"
//   },
//   {
//     "id": 8,
//     "name": "Milkshake",
//     "category": "Beverage",
//     "price": "₹200",
//     "description": "Sweet strawberry milkshake blended with fresh milk.",
//     "image": "https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-the-strawberry-milkshake-png-image_11654495.png"
//   },
//   {
//     "id": 9,
//     "name": "Veggie Salad",
//     "category": "Salad",
//     "price": "₹210",
//     "description": "Fresh vegetable salad with olive oil dressing.",
//     "image": "https://png.pngtree.com/png-clipart/20240830/original/pngtree-food-bowl-vegetable-salad-png-image_15893868.png"
//   },
//   {
//     "id": 10,
//     "name": "Chocolate Cake",
//     "category": "Cake",
//     "price": "₹350",
//     "description": "Moist chocolate cake layered with creamy frosting.",
//     "image": "https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-delicious-chocolate-cake-png-image_11714171.png"
//   }
// ]

   const shoes = [
    {
      "id": 1,
      "name": "Nike Airforce1 Premium",
      "tagline": "Own the Airforce",
      "description": "Step back into classic hoops style with a durable leather build.",
      "price": 111,
      "badge": "Best Seller",
      "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "logo": "https://cdn-icons-png.flaticon.com/512/732/732084.png"
    },
    {
      "id": 2,
      "name": "Adidas Ultraboost 22",
      "tagline": "Energy Return",
      "description": "Responsive cushioning designed for maximum running comfort.",
      "price": 130,
      "badge": "Trending",
      "image": "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
    },
    {
      "id": 3,
      "name": "Puma RS-X Reinvention",
      "tagline": "Bold Streetwear",
      "description": "Chunky design sneaker inspired by retro running style.",
      "price": 99,
      "badge": "Hot",
      "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
    },
    {
      "id": 4,
      "name": "Vans Old Skool Classic",
      "tagline": "Skate Heritage",
      "description": "Iconic skate shoe with signature side stripe and durable canvas.",
      "price": 85,
      "badge": "Popular",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_-icwQUtva-OK_ulzRZz3y1knnME86q9sw&s",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
    },
    {
      "id": 5,
      "name": "Converse Chuck Taylor",
      "tagline": "Classic Icon",
      "description": "Legendary high-top sneaker loved across generations.",
      "price": 75,
      "badge": "Classic",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubbMKKpjuUgHCpWj7ETp70PodaiyDQYrDvw&s",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968773.png"
    },
    {
      "id": 6,
      "name": "New Balance 574",
      "tagline": "Everyday Comfort",
      "description": "Suede and mesh upper with classic ENCAP cushioning.",
      "price": 105,
      "badge": "Featured",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d1hQz9kP3RTKs4VTSvKrIjQGKyT37nLQkQ&s",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968842.png"
    },
    {
      "id": 7,
      "name": "Reebok Club C 85",
      "tagline": "Retro Tennis Style",
      "description": "Minimal leather sneaker inspired by vintage court design.",
      "price": 90,
      "badge": "Limited",
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
    },
    {
      "id": 8,
      "name": "Nike Dunk Low",
      "tagline": "Street Essential",
      "description": "Modern street sneaker inspired by basketball heritage.",
      "price": 120,
      "badge": "New",
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFRUVFRUVFRUWFRUVFxUVFRUWFhUVFRUYHiggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8NFysZFRkrLTctKy0rLSsrLS0tKystLS0rKy0tLSsrLS0tLSs3LSs3KzcrLTctLS03Ky0rLTcrN//AABEIAQ4AuwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABGEAABAgMEBgUIBwUJAQAAAAABAAIDBBEFEiExBhNBUWGRIlJxgaEUQmKCkrHR8AcVFiMyweFDU3LS8SQzVGNzk6KywjT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAABEBEiExAv/aAAwDAQACEQMRAD8A8TTgkSrLTlyRcgVKkXIFSszCauCC6nP7pUqvntrB7lQqjkiVcoOCcmpaoHBOCaE5UcpdnnFRQjyrqFMFzrEutUTXLtcqiZrUpilQ9cuMdBK1pTdcVG16br0FIuSJQsq5cuSIFXFcuQcuC5cg00ky9BPYs3EwJ7VrLAZWCVlpttHu7VQNckRWQqoBrlKbKI8OQSFQAngK0ZZ4R2WeFYVUBhT2wyrxkgEQyQViVSBpS0RphwaSFFfHQPJTC9BfHQHRk6EsxE3WqGYiS+gVKkXLKlKRKkQclSLlAq5IuQbfRJtYLlkrRFIrxxK1+hh+6cspbQ++f2qiErKWaKKtCsIb8ExExhCMyKFBDwnNiK0WLY4RWzAVaIoTxFSix8pTmzNcOCrtau1yUV1pu6ZUIlSZs1cgXFFDTaI4hpdWgj3V11SCAhlCGrk6iWigauT7q66gZRdREuLriAdF1EUMS6tBp9EotGEKhtofeuVvo2KAqvtWF94UFVdRQ5GEBPEugAHJQ4qQJc7kupO5AEOKcHFPMM7k0w3bkC31xiJupduTTLPQNcQmF6eZN64SDygCYqYYinMspxUhtjHcgpi5JVXgsXgl+puCogCAniWK0TZAIrZIblBnGyh3IgkTuWjbKhOEuEGebIFEFnrQCXTxAQUDbP4JxkgMSQBxNFYTVowoRIIvuHmg0FfSd+QWVtefMaI59LoJ6LQahoyDQVYVqrPgXckOZkrzqql0YtK48Q3noPNB6Ljl3FbcQEFA2zuCM2zuCvBASiGoKYWdwTxZg3K4ursEFSLLG5PFlDcrK+kMRBAFmDcnfVrdyma1NMRBF+r27lwkWqQXpC5AMSwCXVBKXJpKDtWF1wJMUtECiAU8S5V4JQJwlgiqMSxThKlXWpCXVhBTiUKXyegcc7oJPcKotv2m2WhF9AXHosbvdx4DMqg0R0hDSYUyf7xxIiHKr61DtwqcFrMTUfR3Rry2DFeIhbGbEyOLC1zWnEZjpXsfBZCel3Q3uY78TXFpplUbl6B9H0xqJ58u/APDofrMJLT3i9zCrPpKsF0CZMSnQjdJp2XwKOb+fedy1vjLFLe6LW82K0QohpEAoCfPA/8AXDvWDcKZrgdyyPXHOQi9ZjR+LPR/uYDHR303VuDYXxCQB6xVpbVhTUmYESajQ334rWGE0uoA7MFwABNK5ZbynHVqe56YXFQLRtNsJoiiC+G0m6IT6BziMS5tCaAY1rgcKcZNlzrI4JYcRmDmK7eIUi0TFLdKlCCniAdyghXU64pzZU7kRskUVXCGu1StmWeUZtncEFKICI2WV4yz+CK2RQUTZRE8jV8JNO8lQQHREwxUUwkmqQB1idCa57g1oxPhxRNWpGiE+yMZgAYwour4kBox9q+O5XMqawX0lwHMmYYP4NSLnbeN89v4fBZHWbF7PpfYjZqCYZoHt6UJ27h2bD3FeMzcq+G8seKOaaEfOxb1EiUnHMcHNOLSHNJzDmmo7V6bK6fyU1C1M9LPunB1AHtqNoNQ4HjSoXkzUdsQjEGm9XNRv49hWG81ZOzMIdQwnRAOwlhPMlOOj9hMFXWhMngIIFez7lYqDOPHnFToU9Wl7Gm/FBpHssVgIhTNoj/TutruwLAOay9vz0NzbkKYm3sqDcmmsOI2te2IaHHq7U+dtAuu9Mi6Q7omlabDTMcFSxnh3TxcTtOVNvZklE1kSBFaHTMzG1lKABlQ0bBx8FDsmfMtFa8GrWuo6nnMri3wryUOIccwTuGKY8HYsj3SXlGuaHNxDgHA7wRUHkpLJILO6E2s18pCaDjDbccNxaTSvaKHvV+2bWG0hsoEQS4UcTCK2MgMIQTxCCY16I16BwhJwgpWlFYgHqE7UBSGhLcQY4zATHTIWVda6GbTJQap02Fl/L3SE4ZhgLoUX+8bvqauA9IHpDtITPLXFMjAxGlrhUHYVc2I9NgTTI8NsSG681wvMcPnA7CO1ZfSvR5sw28AGxWjuI3H0fcfHK2NbEWzolHVdAfiW/8ApvpcNvu9MgR2RmNiQ3AgirXDHPYR7wt1HicaVc0lrgQQaEHYUMs/VepW7o8yOQ6l17SL4G1lcRxbnQ7FqpGxZYwrjIbbjmluAANCKHHMHikR4LBhuJoGknZQE1VnKaPzkXCHKx3dkJ9OdKK1mWzFlTo6biWG9DcSSIkM4Y8CKgjeDwK920Z0ghzkFsaGeDmnNjtrT84iiuYPFrN+iy0IuL4WqGH43sHbUAkjkh27olEknCHGEMXm32PvOihwbg5oBa2hFR4L6CjzDWNL3EBrQS4nIAYkrERmMtuUii7q4sGK7VE8Reh1qKgOaQDxadysHz1NUvFxwqSAKAVHYMAptiah0RrI8PouwvhzgWu2HA0psp371Ot6zYkJ7ocRpY9uBaRQjiN4Ow5KmhxXBxddGGQdiM+G1Z0aDRqcZJzMSFFf0H0Af5uFS1zt2Bpw7l6VDll4u5pcS9sOtCHGjC5radYY4YZFeu6H6Twp1hbdDIrALzK1BGV5h3V2bFjWsWbJdSGQFJBC4xQoprYKK2GhmYCYZpBNa0IgICrDNpDNoLhsQJ+uCojO8U0z/FBgGWa1HZItVQLUciMtEoi6bKtRmS7VTQ5471MhTfFBOmJBkRhY4YHmOIOwrPSk1GsuKa1iQHkVAFAdlRsa8V78O68bNro8Zj2ljwHNdmCqNVITTYrBFYcHAFp20I2j8lOk3Fhq2npN2HiF53Y1pGRNwkvlic83QSduGbV6FJRmvAc0ggirXDEY7Qt5qO0v0dbaEt0KCMyroTjhj5zHcHUA7QDsXluj1rx5KKSxxY4EtexwqDQ4te3tHaF7LKvLDUes3fxCzen2hxmP7XKtrEp97DGb6ZPbveBgRtA3jGoqLV0vjzTAx5aG5lrAQHHYXEkk9mXarv6Inu1803Zq4Dj23ooB7+lyXnUs14dcum/lcukvruuAVrwovaPo60ffKwHPjNuxoxDnNwqxjQQxjiM3dJzjnQvI2K4O090RZPwTSjY7AdU/ftuP3tPhWq+dLRlHMcQWmor0dzgaEHsxX1qV4z9LdgthR/KAKMjip4RW4Ow3OFDXem4PPrJt6LAYYbIbW1qS7OriKZbeexB0btYycfWMo4EXYjcMQTU3TsIIBUGIXVyujGprVII95t1zW1acw3GlNpWB67I24yMwRGHA5ja07WkbCiunuK8usC1/J7zCOg51QBSoJoCeyg8Fp3T/ABWdazWliT/FCNocVmIloKO6dJUVqnWkN6E+1RvWWMZxShjigv4lr8VHNrqtbKEogkCiKKI9D1xUx0qUF8sgGyZKmQZtQHQ1wBQXbJiqMIqo2PKMJgoLRz1JsC23SbqYulyekwYmETm9g6u9qovKSiMi1VzR7fZsdsRrXscHNcKtcMQQfyVxJmmI9ZvFeJ6MaROkSeiXwHYlgOLH9Ztdh2j5PrWj9swpqGI0B9R+EjaCM2PGwj5qF0zWWggx4ZxDm45GoqjRJpjRec9rQMyXADmV5hp7oTrr03KA6zExYQwvHMuYOvvG3tz8roDg4Zb9nNWj2/Sf6TZWXBbAImYuwMP3bT6cQYHsbU9i8bt21piceYsxELn7GjBrBndY3zR8mqFDYBkmQobnHBSivjwiW1pmod1znXQOwZeK2tj6Lzc0ysCA57M9Y4BsOuI6LnUvd3MK2snQWPBi0fBcX0DsaEBtaVq3ClVIMczQ+ZMPWNFTSobXEjhVSLPY8w23mlpHRINdmG1ewnR+MzYDvpgMADgTnn4FZnSKzC06wtocnD3O/LkpuLjHeTFKyWVtcCcyCFhUKFLKbClVJhQQpUNgQAhSyMJYKQ0BPvIM26XCDFlQrvydDdLIM9EkUF0ktI+XQHwEFB5Mhvgq6iQEB8BBSmElAIVm6AEB7AgFDib1JsW1IslFEWXPQr95DOTm9V3PB2Y98N6a11Fc0e+aNaQQZ2HrID8W0ERhwc00rdePc4fFZ/TrQNs0HTMoA2Pm+HkIp28GxOOR2715RZ07GlYjY0s8sc2pcNjhtDgfxNO7s7voWwJ9sxLQo0M4PYDvofOa4b61BXTNrL52LHQ3FjmlrmmjmuBBBGYIOIKtbBjwGx4RmW3oF+sVoFbwDXUBA/EL10kbQKY5L1zTPQyFPi82kKZaMH0weNjYlPxDccx4Lxi2LJjykTVzEIsdsObXDexwwcPk0SD3aU01s6I0MbMwmil26+sIUypR4Aorki80atzbpaQHNoaYC6W5gj9F8yOeCp9iaQTMmb0vGc0VqWHpQ3drDh3ih4q0fREdtREFHHo7zStD0WkYg4CtN4VTbtmtiAigJIxFcQ0g7DkCW07uCzejv0mS8w0wpoNlorhQucC6A8kUJJwLagUo495W4jvvAlpvVbVvVOdDfAIxqPeno8RtOA6BELHdoO8bCgw5leg6X2C2NDIAAc0VYdtQMjw+di8qc8tJacCM1y3I1mr2HMo7ZhUEOZUqHMKC5Eyk8pVYIyTXILfWpDFUIxU3WoJjnoER6AYyY6Ig57kFycXoT4g3oBxCokUqQ+IFGiFAByRKVyDla6O6RR5KIYkE1qKOhOJ1b+JAydl0hjgqui4NTNHttjfSHJR2gRYgl4gzZFNBXeyJkRyPBX8eDLzcG48MmYTtoLH0PWqDgeIxXzk+HVOkJ+PLP1kCI5jh5zDSo3Obk4cDULpn2kegaSfRQ9tYkhE1jcTqYhAeODH5O7HUPErziel4kF5hxobobxm14LT20OY4r0rRz6V2nozkOjjgY8ECppkXw9tOFexbsxpWfgirYM7DwrS7ead5a4gsPeCr1qPnB71OsXSyakj/AGeMQ3bDd04Z9Q/hPFtCvR7c+jSSeSJeZfLPz1cZpe3uvUdTjUrF2h9Gc+ytwQYw3w4zMe6JdKnapbfpQe5obFg5ZXDhlTAOyw4nNU8a0vKHui3btTlnxPiVWnRqaa666A4HiW051oraLICAGw6guDaxKZBxJwHY26sbuqZDCksQmBFBUDy5NL017kIlBtbqa404IBmU3XVUUTWEbfAJ2trsHJCvLr6BxicByCG5gcaljT2tCfTgisYN3igEyEB+GG3uaAneq32QikgJoz4d6gEQOo3kErmt6jfZCIQPkJpdTH8kAyB1W+yE0gdVvshJEjKO91f60QFe5nUb7IQas/djkFwDdp5IjHNH9FREm5CDFwdDbXeOi4d4xVS6xHwnCJLR3scMjUtcOx7KHwWic45tBPYPiokaceMoMQ9jCgbC0qtWGLsVrZln+YwOPNlHE/xAqN9q4tf/AInjgDEp4swTnT8Y5S0Y+o74LhEmXZSkX2D+atEmXtWNEzgiE30n3nHsa0CneiPunG42u+gKJL2XNOFdQR/EWD3uUuHYEc/i1be12PgCs0is6PUbyCTo9RvIK+bo5T8cUD+Fv5kqdLWHAbiSX03nDk1KsZ2Vs8xKEQ20ORNArBujrdt32P1WhLmtF0UAGQwwHAKI6JTC7Xj0cfFSkZWDXaPepkF3onkfzUaBNP3qeyafvr89qoewHqHkjMbXG6eSALQdv9ycLWPzRQHAGxh5JHfwFDFsHd7vgmvtp+73fBAQV6hHcmRXEDKiixLafx8MPBBNrO4+HwQHiOfsaeSA6G85hycy1zu8R8FJh2v6PiFRD8ldsYeSIyz3HzDyVrAtRta3MaZ4ZblPhW6B5nuQU8Gy/QPJSm2cOofnuVn9pPR8AnN0jHV7cP1UEFkiOpTwUgS7RgGjlVSBpL6A5JXaSegOSKRlBmcN1KImtpkPAqLE0nHVHL9VFi6TU80dwQqzfNnLHkoz5rgeSobS0wc0C5DvEmmJu0wz2qtjaTzBaTqw0AEk3g6g30uhWJWmizoGzvqFFi2tuWfOkew86UTDpA3coLeJaY2+9R/rPgq9tsw+qOSO21Ie4IK+Wmd4UsR67SoEOZhDeexzPzKlNnpfMtdzhfzJCpjH4fBOYRtJPzvQBaMDe/nC/mTvL5cjEu77hr/ySFSB4dq64Bs+dm1NZaEqMi7kD7iiPnZQj8b/AGHH3JBFjsohdlOYUp01LH9o7/af/KhGNL7Hup/pRK/9UiguBzw+e5EguHBN10A5RHf7cQf+U+E6CP2h7bjv5UiJjAPmvwRWH5qECFGg/vqeq781JZHg7Y7e/wDUIrhinNZxCLCiS3+IYPWbgi3ZYjCZh+03JAAmgwIQ4jztr3KY1kD/ABEIeu013HNNdAg7I8I+u34oIBaSoceEBj8VbPl2deGfXZ8VHiyTT5zD67fiiK2BL33U+dinTch9zEw/Zv8A+pRbIlBrgABk7JwOyuXctDHkascN7XDmCtZ4jypwQ6Ka2TJa00zaDmNyC+z3b/zWVRwU/W8E4SB+apfq871BEonUXo/k0vtk4R43Ao5syVqf7NmScK0HZjgFrliRgFxC9AFjyn7mnefiuFhyZ/ZEes74pywjz+i5b86OyhyY4es5NOjErucPWKcsIwVF1FvDozK+l7SG7RuW3v8AaCcsIxAC6hW2Ojkv1njvHwSfZuX/AHj/AA+CXBi2tKWh3lbP7NQf3rv+K4aMwjlFPIK3BjgXbzzKcL/WPMrYjRdn73wCQ6MtH7T/AI/qlwZAuf1ncylF/rO5la37MA/tB7P6pToz/mDkUuDKfedZ3MpzTE67uZWoGjp67fFP+zbus3xS4MzDixWkOa8gjapTbTmf3p5D4K9+zruszmfgl+zkTe3mfglwZVjXAUFANwa0DlRPLHcPZb8Fp/s9E9Hn+iZ9n4m5vNLgzmrPD2W/BJqTuHsj4LRmwonVHMJPqWJ1fEJcGxdJA/1SGRFFOv1Fd9Ny6/tXOKrWyIOIHOqd9XjaPerFsTHH5Kc51PnekFU6UA83wTfIuHgrIvqTjkdwTmkYfBIKxtnfNFxs1W4oml/akFSbOG8BMEkBs9wV3cqmmGgpPJGjE1TmSzTsVzqR8gIdwJBVmSBTPq/crlsFIGjJIKg2f8hILOV5qNi4wBkAEVTiU7/BKZYbvFWzZYbghulwcsKZ4A1QVYlmhPEu1WrZdu7cnamu2ncFBVagbzzTWyY2HxVi+VFanHPDD8k10uD/AEQVos4HzqpG2Y3eff4q3ZLDYfnJKZYBB//Z",
      "logo": "https://cdn-icons-png.flaticon.com/512/732/732084.png"
    },
    {
      "id": 9,
      "name": "Adidas NMD R1",
      "tagline": "Urban Explorer",
      "description": "Lightweight sneaker blending running tech with street style.",
      "price": 140,
      "badge": "Top Pick",
      "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
    },
    {
      "id": 10,
      "name": "Puma Future Rider",
      "tagline": "Play On",
      "description": "Retro-inspired sneaker with ultra lightweight cushioning.",
      "price": 95,
      "badge": "Best Value",
      "image": "https://images.unsplash.com/photo-1584735175097-719d848f8449",
      "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
    }
  ]


 return (
<>
  {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
 
   {data.map(function(juice) {  
  return <Card data={juice} key={juice.id} />;
})}
  </section> */}

 {/* <section className="flex items-center flex-wrap py-4 px-6 gap-6 justify-center">
   
   {Product.map(function (data) {
    return <ProductCard data={data} key={data.company_logo}/>;
   })}
 </section> */}

{/* <section className="flex items-center flex-wrap py-4 px-6 gap-6 justify-center">
        <Card3 />

 {foods.map((item, i) => (
          <Card3 key={i} data={item} />
        ))}


      </section> */}

<section className="flex items-center flex-wrap py-4 px-6 gap-6 justify-center">
        <Card2 />


        {shoes.map((item, i) => (
          <Card2 key={i} data={item}/>
        ))}
        </section>
  </>
  )
}

export default App