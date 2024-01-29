// src/ProductListPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
  // Dummy product data (replace this with your actual data)
  const products = [
    { id: 1, name: 'Product 1', price: 50, image: 'shoping.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 3, image: 'product2.jpg' },
    { id: 4, name: 'Product 4', price: 350, image: 'product2.jpg' },
    { id: 5, name: 'Product 5', price: 306, image: 'product2.jpg' },
    { id: 6, name: 'Product 6', price: 300, image: 'product2.jpg' },
    // ... Add more products
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('priceHighToLow');

  // Filtered and sorted products (using dummy data for comparison)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'priceHighToLow') {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Products</h2>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Filter options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
        </select>
      </div>

      {/* Product list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <Link to={`/compare/${product.id}`} className="block">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-md hover:opacity-75 transition duration-300 ease-in-out"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
    </Link>
  </div>
);

export default ProductListPage;
