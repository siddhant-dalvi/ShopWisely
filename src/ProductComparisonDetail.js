import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Dummy product data (replace this with your actual data retrieval logic)
const getProductById = (id) => {
  // Dummy data for demonstration
  const products = {
    151: {
      id: 151,
      name: 'Singapore Mei Fun',
      zomato: { price: 345, rating: 4.5, review: 'Good', image: '/Images/d151.jpeg' },
      swiggy: { price: 345, rating: 4.6, review: 'Very Good', image: '/Images/d151.jpeg' }
    },
    152: {
      id: 152,
      name: 'Scallion Pancakes with Dim Sum Dipper',
      zomato: { price: 672, rating: 4.2, review: 'Okay', image: '/Images/d152.jpeg' },
      swiggy: { price: 672, rating: 4.3, review: 'Good', image: '/Images/d152.jpeg' }
    },
    153: {
      id: 153,
      name: 'Takeout-style Air Fryer Egg Rolls',
      zomato: { price: 564, rating: 4.2, review: 'Okay', image: '/Images/d153.jpeg' },
      swiggy: { price: 564, rating: 4.3, review: 'Niceeee', image: '/Images/d153.jpeg' }
    },
    154: {
      id: 154,
      name: 'Char Siu',
      zomato: { price: 879, rating: 4.1, review: 'Nice', image: '/Images/d154.jpeg' },
      swiggy: { price: 879, rating: 3.9, review: 'Okay', image: '/Images/d154.jpeg' }
    },
    155: {
      id: 155,
      name: 'Char Siu Bao',
      zomato: { price: 498, rating: 4.2, review: 'Nice', image: '/Images/d155.jpeg' },
      swiggy: { price: 498, rating: 4.0, review: 'Good', image: '/Images/d155.jpeg' }
    },
    156: {
      id: 156,
      name: 'Pork Soup Dumplings',
      zomato: { price: 123, rating: 4.3, review: 'Good', image: '/Images/d156.jpeg' },
      swiggy: { price: 123, rating: 4.1, review: 'Nice', image: '/Images/d156.jpeg' }
    },
    157: {
      id: 157,
      name: 'Wontons in Chili Oil',
      zomato: { price: 267, rating: 4.2, review: 'Okay', image: '/Images/d157.jpeg' },
      swiggy: { price: 267, rating: 3.9, review: 'Okay', image: '/Images/d157.jpeg' }
    },
    158: {
      id: 158,
      name: 'Bo Zai Fan (Clay Pot Rice)',
      zomato: { price: 786, rating: 4.5, review: 'Good', image: '/Images/d158.jpeg' },
      swiggy: { price: 786, rating: 4.3, review: 'Nice', image: '/Images/d158.jpeg' }
    },
    159: {
      id: 159,
      name: 'Braised Eggplant with Tofu and Shiitake Mushrooms in a Clay Pot',
      zomato: { price: 521, rating: 4.2, review: 'Nice', image: '/Images/d159.jpeg' },
      swiggy: { price: 521, rating: 4.1, review: 'Good', image: '/Images/d159.jpeg' }
    },
    160: {
      id: 160,
      name: 'Hong Kong-Style Macaroni Soup',
      zomato: { price: 487, rating: 4.1, review: 'Good', image: '/Images/d160.jpeg' },
      swiggy: { price: 487, rating: 4.0, review: 'Nice', image: '/Images/d160.jpeg' }
    },
    161: {
      id: 161,
      name: 'Tomato and Egg with Rice',
      zomato: { price: 999, rating: 4.0, review: 'Nice', image: '/Images/d161.jpeg' },
      swiggy: { price: 999, rating: 3.9, review: 'Okay', image: '/Images/d161.jpeg' }
    },
    162: {
      id: 162,
      name: 'Salted Pork Congee with Century Egg',
      zomato: { price: 323, rating: 4.0, review: 'Nice', image: '/Images/d162.jpeg' },
      swiggy: { price: 323, rating: 3.8, review: 'Okay', image: '/Images/d162.jpeg' }
    },
    163: {
      id: 163,
      name: 'Tang Jai Jook',
      zomato: { price: 444, rating: 4.1, review: 'Nice', image: '/Images/d163.jpeg' },
      swiggy: { price: 444, rating: 4.0, review: 'Good', image: '/Images/d163.jpeg' }
    },
    164: {
      id: 164,
      name: 'Tanghulu',
      zomato: { price: 732, rating: 4.2, review: 'Good', image: '/Images/d164.jpeg' },
      swiggy: { price: 732, rating: 4.0, review: 'Nice', image: '/Images/d164.jpeg' }
    },
    165: {
      id: 165,
      name: 'Crispy Stuffed Lotus Root with Pork',
      zomato: { price: 235, rating: 4.3, review: 'Good', image: '/Images/d165.jpeg' },
      swiggy: { price: 235, rating: 4.2, review: 'Nice', image: '/Images/d165.jpeg' }
    },
    166: {
      id: 166,
      name: 'Salt and Pepper Tofu',
      zomato: { price: 878, rating: 3.9, review: 'Okay', image: '/Images/d166.jpeg' },
      swiggy: { price: 878, rating: 3.8, review: 'Okay', image: '/Images/d166.jpeg' }
    },
    167: {
      id: 167,
      name: 'Smashed Cucumber Salad',
      zomato: { price: 999, rating: 4.0, review: 'Nice', image: '/Images/d167.jpeg' },
      swiggy: { price: 999, rating: 3.8, review: 'Okay', image: '/Images/d167.jpeg' }
    },
    168: {
      id: 168,
      name: 'Drunken Chicken',
      zomato: { price: 123, rating: 4.2, review: 'Good', image: '/Images/d168.jpeg' },
      swiggy: { price: 123, rating: 4.1, review: 'Nice', image: '/Images/d168.jpeg' }
    },
    169: {
      id: 169,
      name: 'Sweet and Sour Pork',
      zomato: { price: 567, rating: 4.1, review: 'Nice', image: '/Images/d169.jpeg' },
      swiggy: { price: 567, rating: 4.0, review: 'Good', image: '/Images/d169.jpeg' }
    },
    170: {
      id: 170,
      name: 'Dumplings with a Crispy Skirt',
      zomato: { price: 876, rating: 3.9, review: 'Okay', image: '/Images/d170.jpeg' },
      swiggy: { price: 876, rating: 3.8, review: 'Okay', image: '/Images/d170.jpeg' }
    },
    171: {
      id: 171,
      name: 'Chicken Pot Stickers with Dipping Sauce',
      zomato: { price: 345, rating: 4.1, review: 'Nice', image: '/Images/d171.jpeg' },
      swiggy: { price: 345, rating: 4.0, review: 'Good', image: '/Images/d171.jpeg' }
    },
    172: {
      id: 172,
      name: 'Hot Pot at Home',
      zomato: { price: 786, rating: 4.2, review: 'Good', image: '/Images/d172.jpeg' },
      swiggy: { price: 786, rating: 4.1, review: 'Nice', image: '/Images/d172.jpeg' }
    },
    173: {
      id: 173,
      name: 'Hong Kong Egg Tarts',
      zomato: { price: 234, rating: 4.0, review: 'Nice', image: '/Images/d173.jpeg' },
      swiggy: { price: 234, rating: 3.9, review: 'Okay', image: '/Images/d173.jpeg' }
    },
    174: {
      id: 174,
      name: 'Hong Dou Tang',
      zomato: { price: 678, rating: 4.2, review: 'Nice', image: '/Images/d174.jpeg' },
      swiggy: { price: 678, rating: 4.0, review: 'Good', image: '/Images/d174.jpeg' }
    },
    175: {
      id: 175,
      name: 'Sweet Potato Tapioca Dessert Soup',
      zomato: { price: 908, rating: 4.1, review: 'Nice', image: '/Images/d175.jpeg' },
      swiggy: { price: 908, rating: 4.0, review: 'Good', image: '/Images/d175.jpeg' }
    },
    176: {
      id: 176,
      name: 'Hong Kong-Style Condensed Milk Toast',
      zomato: { price: 465, rating: 4.0, review: 'Nice', image: '/Images/d176.jpeg' },
      swiggy: { price: 465, rating: 3.8, review: 'Okay', image: '/Images/d176.jpeg' }
    },
    177: {
      id: 177,
      name: 'Nian Gao',
      zomato: { price: 234, rating: 4.1, review: 'Nice', image: '/Images/d177.jpeg' },
      swiggy: { price: 234, rating: 4.0, review: 'Good', image: '/Images/d177.jpeg' }
    },
    178: {
      id: 178,
      name: 'Grandma\'s Tepong Pork',
      zomato: { price: 897, rating: 4.2, review: 'Good', image: '/Images/d178.jpeg' },
      swiggy: { price: 897, rating: 4.1, review: 'Nice', image: '/Images/d178.jpeg' }
    },
    179: {
      id: 179,
      name: 'Shanghai Red-Braised Pork with Eggs',
      zomato: { price: 786, rating: 4.3, review: 'Good', image: '/Images/d179.jpeg' },
      swiggy: { price: 786, rating: 4.2, review: 'Nice', image: '/Images/d179.jpeg' }
    },
    180: {
      id: 180,
      name: 'Orange Chicken',
      zomato: { price: 543, rating: 4.1, review: 'Nice', image: '/Images/d180.jpeg' },
      swiggy: { price: 543, rating: 4.0, review: 'Good', image: '/Images/d180.jpeg' }
    },
    181: {
      id: 181,
      name: 'Pressed Sliced Tofu Salad',
      zomato: { price: 456, rating: 4.2, review: 'Nice', image: '/Images/d181.jpeg' },
      swiggy: { price: 456, rating: 4.0, review: 'Good', image: '/Images/d181.jpeg' }
    },
    182: {
      id: 182,
      name: 'Buddha\'s Delight',
      zomato: { price: 765, rating: 4.3, review: 'Good', image: '/Images/d182.jpeg' },
      swiggy: { price: 765, rating: 4.1, review: 'Nice', image: '/Images/d182.jpeg' }
    },
    183: {
      id: 183,
      name: 'Mapo Tofu',
      zomato: { price: 987, rating: 4.1, review: 'Nice', image: '/Images/d183.jpeg' },
      swiggy: { price: 987, rating: 4.0, review: 'Good', image: '/Images/d183.jpeg' }
    },
    184: {
      id: 184,
      name: 'Mushroom Mapo Tofu',
      zomato: { price: 234, rating: 4.0, review: 'Nice', image: '/Images/d184.jpeg' },
      swiggy: { price: 234, rating: 3.9, review: 'Okay', image: '/Images/d184.jpeg' }
    },
    185: {
      id: 185,
      name: 'The Best Pork Fried Rice',
      zomato: { price: 765, rating: 4.1, review: 'Nice', image: '/Images/d185.jpeg' },
      swiggy: { price: 765, rating: 4.0, review: 'Good', image: '/Images/d185.jpeg' }
    },
    186: {
      id: 186,
      name: 'Classic Lo Mein',
      zomato: { price: 345, rating: 4.2, review: 'Nice', image: '/Images/d186.jpeg' },
      swiggy: { price: 345, rating: 4.1, review: 'Good', image: '/Images/d186.jpeg' }
    },
    187: {
      id: 187,
      name: 'Tea Eggs',
      zomato: { price: 654, rating: 4.0, review: 'Nice', image: '/Images/d187.jpeg' },
      swiggy: { price: 654, rating: 3.9, review: 'Okay', image: '/Images/d187.jpeg' }
    },
    188: {
      id: 188,
      name: 'Tangyuan with Peanut Filling',
      zomato: { price: 234, rating: 4.1, review: 'Nice', image: '/Images/d188.jpeg' },
      swiggy: { price: 234, rating: 4.0, review: 'Good', image: '/Images/d188.jpeg' }
    },
    189: {
      id: 189,
      name: 'Ba Bao Fan',
      zomato: { price: 567, rating: 4.0, review: 'Nice', image: '/Images/d189.jpeg' },
      swiggy: { price: 567, rating: 3.9, review: 'Okay', image: '/Images/d189.jpeg' }
    },
    190: {
      id: 190,
      name: 'Chinese Almond Cookies',
      zomato: { price: 987, rating: 4.2, review: 'Good', image: '/Images/d190.jpeg' },
      swiggy: { price: 987, rating: 4.0, review: 'Nice', image: '/Images/d190.jpeg' }
    },
    191: {
      id: 191,
      name: 'Fa Gao',
      zomato: { price: 456, rating: 4.1, review: 'Nice', image: '/Images/d191.jpeg' },
      swiggy: { price: 456, rating: 4.0, review: 'Good', image: '/Images/d191.jpeg' }
    },
    192: {
      id: 192,
      name: 'Dan-Dan Noodles',
      zomato: { price: 234, rating: 4.2, review: 'Nice', image: '/Images/d192.jpeg' },
      swiggy: { price: 234, rating: 4.0, review: 'Good', image: '/Images/d192.jpeg' }
    },
    193: {
      id: 193,
      name: 'Dan Dan Mian',
      zomato: { price: 654, rating: 4.0, review: 'Nice', image: '/Images/d193.jpeg' },
      swiggy: { price: 654, rating: 3.9, review: 'Okay', image: '/Images/d193.jpeg' }
    },
    194: {
      id: 194,
      name: 'Chili Oil',
      zomato: { price: 876, rating: 4.2, review: 'Good', image: '/Images/d194.jpeg' },
      swiggy: { price: 876, rating: 4.0, review: 'Nice', image: '/Images/d194.jpeg' }
    },
    195: {
      id: 195,
      name: 'Easy Stir-Fry Sauce',
      zomato: { price: 234, rating: 4.1, review: 'Nice', image: '/Images/d195.jpeg' },
      swiggy: { price: 234, rating: 4.0, review: 'Good', image: '/Images/d195.jpeg' }
    },
    196: {
      id: 196,
      name: 'Scallion-Ginger Sauce',
      zomato: { price: 765, rating: 4.2, review: 'Good', image: '/Images/d196.jpeg' },
      swiggy: { price: 765, rating: 4.1, review: 'Nice', image: '/Images/d196.jpeg' }
    },
    197: {
      id: 197,
      name: 'Bai Qie Ji (White Cut Chicken)',
      zomato: { price: 987, rating: 4.0, review: 'Nice', image: '/Images/d197.jpeg' },
      swiggy: { price: 987, rating: 3.9, review: 'Okay', image: '/Images/d197.jpeg' }
    },
    198: {
      id: 198,
      name: 'Soy Sauce Chicken (See Yao Gai)',
      zomato: { price: 234, rating: 4.2, review: 'Nice', image: '/Images/d198.jpeg' },
      swiggy: { price: 234, rating: 4.0, review: 'Good', image: '/Images/d198.jpeg' }
    },
    199: {
      id: 199,
      name: 'Crisp Seaweed with Peanuts',
      zomato: { price: 567, rating: 4.1, review: 'Nice', image: '/Images/d199.jpeg' },
      swiggy: { price: 567, rating: 4.0, review: 'Good', image: '/Images/d199.jpeg' }
    },
    200: {
      id: 200,
      name: 'Chinese Milk Bread',
      zomato: { price: 987, rating: 4.2, review: 'Good', image: '/Images/d200.jpeg' },
      swiggy: { price: 987, rating: 4.1, review: 'Nice', image: '/Images/d200.jpeg' }
    }
    
    
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
