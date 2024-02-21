import React from 'react';
import { Link } from 'react-router-dom';

const ProductComparisonTable = ({ product }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Website</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Rating</th>
              <th className="border border-gray-300 p-2">Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Zomato</td>
              <td className="border border-gray-300 p-2">
                <img
                  src={product.zomato.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">${product.zomato.price}</td>
              <td className="border border-gray-300 p-2">{product.zomato.rating}</td>
              <td className="border border-gray-300 p-2">{product.zomato.review}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Swiggy</td>
              <td className="border border-gray-300 p-2">
                <img
                  src={product.swiggy.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </td>
              <td className="border border-gray-300 p-2">${product.swiggy.price}</td>
              <td className="border border-gray-300 p-2">{product.swiggy.rating}</td>
              <td className="border border-gray-300 p-2">{product.swiggy.review}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <Link to="/products" className="text-blue-500 hover:underline">View All Products</Link>
      </div>
    </div>
  );
};

export default ProductComparisonTable;
