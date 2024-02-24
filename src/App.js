import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import ProductComparisonPage from './ProductComparisonPage';
import ProductComparisonDetail from './ProductComparisonDetail'; // Import the component
import DiningListPage from './DiningListPage'; // Import DiningListPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-semibold">ShopWisely</div>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/explore-shopping" element={<ProductListPage />} />
          <Route path="/shopping/compare/:id" element={<ProductComparisonPage />} />

          <Route path="/compare/:id" element={<ProductComparisonPage />} />
          <Route path="/explore-dining" element={<DiningListPage />} />
          <Route path="/dining/compare/:id" element={<ProductComparisonDetail />} />
        </Routes>

        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Content goes here */}
          </div>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="container mx-auto p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img src="/Images/shop.jpg" alt="Shopping" className="w-full h-80 md:h-full object-cover mb-4 rounded-md" />
        <div className="flex justify-center">
          <Link to="/explore-shopping" className="block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Explore Shopping
          </Link>
        </div>
      </div>
      <div>
        <img src="/Images/dining2.png" alt="Dining" className="w-full h-80 md:h-full object-cover mb-4 rounded-md" />
        <div className="flex justify-center">
          <Link to="/explore-dining" className="block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Explore Dining
          </Link>
        </div>
      </div>
    </div>
  </div>
);


const AboutUs = () => (
  <div className="bg-white p-8 mt-8">
    <h2 className="text-2xl font-semibold mb-4" id="home">
      Welcome to our App!
    </h2>
    <p>
      We are a team of four enthusiastic individuals currently in our final year of Computer Engineering at Sinhgad Academy of Engineering. Under the guidance of Prof. Shelke, the Head of the Computer Department, we have collaborated to create a groundbreaking price comparison web app. Our project aims to simplify the user experience by providing seamless price comparison across popular platforms. In the shopping section, we aggregate prices from giants like Amazon and Flipkart. In the dining section, we compare prices from Zomato and Swiggy, making it a one-stop solution for users. Throughout this journey, our focus has been on delivering a user-friendly and efficient platform. We are committed to simplifying the shopping and dining experience, helping users make informed decisions.
      Thank you for being a part of our exciting venture!
    </p>
  </div>
);

export default App;
