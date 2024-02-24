import React from 'react';
import { Link } from 'react-router-dom';

const ProductComparisonTable = ({ product }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Website</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Rating</th>
              <th className="border border-gray-300 p-2">Review</th>
              <th className="border border-gray-300 p-2">Buy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Amazon</td>
              <td className="border border-gray-300 p-2">
                <img
                  src={product.amazon.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">₹{product.amazon.price}</td>
              <td className="border border-gray-300 p-2">{product.amazon.rating}</td>
              <td className="border border-gray-300 p-2">{product.amazon.review}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Buy
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Flipkart</td>
              <td className="border border-gray-300 p-2">
                <img
                  src={product.flipkart.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2"> ₹{product.flipkart.price}</td>
              <td className="border border-gray-300 p-2">{product.flipkart.rating}</td>
              <td className="border border-gray-300 p-2">{product.flipkart.review}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Buy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4">
  <Link
    to="/explore-shopping"
    className="text-blue-700 font-bold inline-block px-4 py-2 bg-blue-200 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white duration-300 ease-in-out"
  >
    View All Products
  </Link>
</div>
    </div>
  );
};

export default ProductComparisonTable;
