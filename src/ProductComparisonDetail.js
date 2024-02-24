import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Dummy product data (replace this with your actual data retrieval logic)
const getProductById = (id) => {
  // Dummy data for demonstration
  const products = {
    1: {
      id: 1,
      name: 'Pizza',
      zomato: { price: 10, rating: 4.5, review: 'Good', image: '/Images/pizza.jpg' },
      swiggy: { price: 12, rating: 4.6, review: 'Very Good', image: '/Images/pizza.jpg' }
    },
    2: {
      id: 2,
      name: 'Burger',
      zomato: { price: 8, rating: 4.2, review: 'Okay', image: '/Images/burger.jpg' },
      swiggy: { price: 9, rating: 4.3, review: 'Good', image: '/Images/burger.jpg' }
    },
    3: {
      id: 3,
      name: 'Dosa',
      zomato: { price: 3, rating: 4.2, review: 'Okay', image: '/Images/dosa.jpg' },
      swiggy: { price: 3.5, rating: 4.3, review: 'Niceeee', image: '/Images/dosa.jpg' }
    },
    4: {
      id: 4,
      name: 'Samosa',
      zomato: { price: 15, rating: 4.2, review: 'Okay', image: '/Images/samosa.jpg' },
      swiggy: { price: 10, rating: 4.3, review: 'Niceeee', image: '/Images/samosa.jpg' }
    },
    // Add more products
  };

  return products[id];
};

const ProductComparisonDetail = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = getProductById(id); // Replace this with your logic to get product details

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Product Comparison</h2>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">Platform</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Rating</th>
            <th className="border border-gray-400 px-4 py-2">Review</th>
            <th className="border border-gray-400 px-4 py-2">Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Zomato</td>
            <td className="border border-gray-400 px-4 py-2"><img src={product.zomato.image} alt={product.name} className="w-24 h-24 object-cover sm:w-32 sm:h-32" /></td>
            <td className="border border-gray-400 px-4 py-2">₹{product.zomato.price}</td>
            <td className="border border-gray-400 px-4 py-2">{product.zomato.rating}</td>
            <td className="border border-gray-400 px-4 py-2">{product.zomato.review}</td>
            <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Buy</button></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Swiggy</td>
            <td className="border border-gray-400 px-4 py-2"><img src={product.swiggy.image} alt={product.name} className="w-24 h-24 object-cover sm:w-32 sm:h-32" /></td>
            <td className="border border-gray-400 px-4 py-2">₹{product.swiggy.price}</td>
            <td className="border border-gray-400 px-4 py-2">{product.swiggy.rating}</td>
            <td className="border border-gray-400 px-4 py-2">{product.swiggy.review}</td>
            <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Buy</button></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/explore-dining"
          className="text-blue-700 font-bold inline-block px-4 py-2 bg-blue-200 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white duration-300 ease-in-out"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductComparisonDetail;
