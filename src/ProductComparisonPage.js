// src/ProductComparisonPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

// Define ProductComparisonCard component
const ProductComparisonCard = ({ product }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <h2 className="text-xl font-semibold mb-2">{product.website}</h2>
    <p className="text-gray-700">Price: ${product.price}</p>
    <p className="text-gray-700">Rating: {product.rating}</p>
    {/* Add more details as needed */}
  </div>
);

const ProductComparisonPage = () => {
  const { id } = useParams();

  // Dummy product data (replace this with your actual data)
  const productDetails = [
    { id: 1, website: 'Amazon', price: 45.99, rating: 4.5, reviews: 120 },
    { id: 2, website: 'Walmart', price: 49.99, rating: 4.2, reviews: 90 },
    { id: 2, website: 'Walmart', price: 49.99, rating: 4.2, reviews: 90 }
    // ... Add more websites and their product details
  ];

  // Find the selected product details
  const selectedProductId = Number(id);
  const selectedProduct = productDetails.find(product => product.id === selectedProductId);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{selectedProduct.website} Comparison</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productDetails.map(product => (
          <ProductComparisonCard key={product.id} product={product} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Comparison Table</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Product Image</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price on {productDetails[0].website}</th>
            <th className="py-2 px-4 border-b">Price on {productDetails[1].website}</th>
            <th className="py-2 px-4 border-b">Rating on {productDetails[0].website}</th>
            <th className="py-2 px-4 border-b">Rating on {productDetails[1].website}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">
              <img src={`product${selectedProductId}.jpg`} alt={`Product ${selectedProductId}`} className="w-12 h-12 object-cover rounded-md" />
            </td>
            <td className="py-2 px-4 border-b">{selectedProduct.website}</td>
            <td className="py-2 px-4 border-b">${productDetails[0].price}</td>
            <td className="py-2 px-4 border-b">${productDetails[1].price}</td>
            <td className="py-2 px-4 border-b">{productDetails[0].rating}</td>
            <td className="py-2 px-4 border-b">{productDetails[1].rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default ProductComparisonPage;
