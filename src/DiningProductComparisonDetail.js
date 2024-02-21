// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ProductComparisonTable from './ProductComparisonTable';

// const DiningProductComparisonDetail = () => {
//   const { id } = useParams(); // Get the product id from the URL
//   const product = getProductById(id); // Replace this with your logic to get product details

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
//       <ProductComparisonTable product={product} />
//     </div>
//   );
// };

// // Dummy product data (replace this with your actual data retrieval logic)
// const getProductById = (id) => {
//   // Dummy data for demonstration
//   const products = {
//     1: {
//       id: 1,
//       name: 'Pizza',
//       zomato: { price: 10, rating: 4.5, review: 'Good', image: '/Images/pizza.jpg' },
//       swiggy: { price: 12, rating: 4.6, review: 'Very Good', image: '/Images/pizza.jpg' }
//     },
//     2: {
//       id: 2,
//       name: 'Burger',
//       zomato: { price: 8, rating: 4.2, review: 'Okay', image: '/Images/burger.jpg' },
//       swiggy: { price: 9, rating: 4.3, review: 'Good', image: '/Images/burger.jpg' }
//     },
//     3: {
//       id: 3,
//       name: 'Dosa',
//       zomato: { price: 3, rating: 4.2, review: 'Okay', image: '/Images/dosa.jpg' },
//       swiggy: { price: 3.5, rating: 4.3, review: 'Niceeee', image: '/Images/dosa.jpg' }
//     },
//     // Add more products
//   };

//   return products[id];
// };


// export default DiningProductComparisonDetail;
