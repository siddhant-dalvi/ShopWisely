import React from 'react';
import { useParams } from 'react-router-dom';
import ProductComparisonTable from './ProductComparisonTable';

const ProductComparisonPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = getProductById(id); // Replace this with your logic to get product details

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
      <ProductComparisonTable product={product} />
    </div>
  );
};

const getProductById = (id) => {
  const products = {
    1: {
      id: 1,
      name: 'Dell 15 Laptop',
      amazon: { price: 44990, rating: 4.5, review: 'Good', image: '/Images/1.jpg' },
      flipkart: { price: 44000, rating: 4.6, review: 'Very Good', image: '/Images/1.jpg' }
    },
    2: {
      id: 2,
      name: 'Lenovo IdeaPad 3',
      amazon: { price: 33990, rating: 4.2, review: 'Okay', image: '/Images/2.jpg' },
      flipkart: { price: 32999, rating: 4.3, review: 'Good', image: '/Images/2.jpg' }
    },
    3: {
      id: 3,
      name: 'HP Laptop 15s',
      amazon: { price: 55990, rating: 4.2, review: 'Okay', image: '/Images/3.jpg' },
      flipkart: { price: 55199, rating: 4.3, review: 'Niceeee', image: '/Images/3.jpg' }
    },
    4: {
      id: 4,
      name: 'ASUS Vivobook 15',
      amazon: { price: 53999, rating: 4.5, review: 'Good', image: '/Images/4.jpg' },
      flipkart: { price: 55500, rating: 4.6, review: 'Very Good', image: '/Images/4.jpg' }
    },
    5: {
      id: 5,
      name: 'Samsung Galaxy Book3',
      amazon: { price: 89040, rating: 4.2, review: 'Okay', image: '/Images/5.jpg' },
      flipkart: { price: 88999, rating: 4.3, review: 'Good', image: '/Images/5.jpg' }
    },
    6: {
      id: 6,
      name: 'MSI Modern 14',
      amazon: { price: 54831, rating: 4.2, review: 'Okay', image: '/Images/6.jpg' },
      flipkart: { price: 55999, rating: 4.3, review: 'Niceeee', image: '/Images/6.jpg' }
    },
    7: {
      id: 7,
      name: 'Apple 2023 MacBook Pro',
      amazon: { price: 199900, rating: 4.5, review: 'Good', image: '/Images/7.jpg' },
      flipkart: { price: 198999, rating: 4.6, review: 'Very Good', image: '/Images/7.jpg' }
    },
    8: {
      id: 8,
      name: 'Apple 2022 MacBook Air',
      amazon: { price: 102990, rating: 4.2, review: 'Okay', image: '/Images/8.jpg' },
      flipkart: { price: 112999, rating: 4.3, review: 'Good', image: '/Images/8.jpg' }
    },
    9: {
      id: 9,
      name: 'Mi Notebook Horizon Edition',
      amazon: { price: 45040, rating: 4.2, review: 'Okay', image: '/Images/9.jpg' },
      flipkart: { price: 44999, rating: 4.3, review: 'Niceeee', image: '/Images/9.jpg' }
    },
    10: {
      id: 10,
      name: 'ASUS VivoBook 15 (2021)',
      amazon: { price: 23999, rating: 4.5, review: 'Good', image: '/Images/10.jpg' },
      flipkart: { price: 23599, rating: 4.6, review: 'Very Good', image: '/Images/10.jpg' }
    },
    11: {
      id:11,
      name: 'Apple iPhone 15 (256 GB)',
      amazon: { price: 80990, rating: 4.2, review: 'Okay', image: '/Images/11.jpg' },
      flipkart: { price: 79999, rating: 4.3, review: 'Good', image: '/Images/11.jpg' }
    },
    12: {
      id: 12,
      name: 'Apple iPhone 15 Pro (512 GB)',
      amazon: { price: 158990, rating: 4.2, review: 'Okay', image: '/Images/12.jpg' },
      flipkart: { price: 156999, rating: 4.3, review: 'Niceeee', image: '/Images/12.jpg' }
    },
    13: {
      id: 13,
      name: 'OnePlus 12',
      amazon: { price: 69999, rating: 4.5, review: 'Good', image: '/Images/13.jpg' },
      flipkart: { price: 71999, rating: 4.6, review: 'Very Good', image: '/Images/13.jpg' }
    },
    14: {
      id: 14,
      name: 'Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)',
      amazon: { price: 10990, rating: 4.2, review: 'Okay', image: '/Images/14.jpg' },
      flipkart: { price: 11999, rating: 4.3, review: 'Good', image: '/Images/14.jpg' }
    },
    15: {
      id: 15,
      name: 'Realme narzo N53',
      amazon: { price: 8999, rating: 4.2, review: 'Okay', image: '/Images/15.jpg' },
      flipkart: { price: 9999, rating: 4.3, review: 'Niceeee', image: '/Images/15.jpg' }
    },
    16: {
      id: 16,
      name: 'Realme narzo 60X 5G',
      amazon: { price: 12499, rating: 4.5, review: 'Good', image: '/Images/16.jpg' },
      flipkart: { price: 12999, rating: 4.6, review: 'Very Good', image: '/Images/16.jpg' }
    },
    17: {
      id: 17,
      name: 'OnePlus Nord CE 3 Lite 5G',
      amazon: { price: 19999, rating: 4.2, review: 'Okay', image: '/Images/17.jpg' },
      flipkart: { price: 20999, rating: 4.3, review: 'Good', image: '/Images/17.jpg' }
    },
    18: {
      id: 18,
      name: 'Redmi 13C',
      amazon: { price: 8999, rating: 4.2, review: 'Okay', image: '/Images/18.jpg' },
      flipkart: { price: 8499, rating: 4.3, review: 'Niceeee', image: '/Images/18.jpg' }
    },
    19: {
      id: 19,
      name: 'POCO M6 Pro 5G',
      amazon: { price: 12999, rating: 4.2, review: 'Okay', image: '/Images/19.jpg' },
      flipkart: { price: 12999, rating: 4.3, review: 'Good', image: '/Images/19.jpg' }
    },
    20: {
      id: 20,
      name: 'iQOO Z7 Pro 5G',
      amazon: { price: 23999, rating: 4.2, review: 'Okay', image: '/Images/20.jpg' },
      flipkart: { price: 23999, rating: 4.3, review: 'Niceeee', image: '/Images/20.jpg' }
    },
    
      21: {
        id: 21,
        name: 'Noise Quad Call',
        amazon: { price: 1199, rating: 4.1, review: 'Nice earbuds with good sound quality.', image: '/Images/21.jpg' },
        flipkart: { price: 1299, rating: 3.9, review: 'Okay product, expected better.', image: '/Images/21.jpg' }
      },
      22: {
        id: 22,
        name: 'Noise ColorFit Pulse 3',
        amazon: { price: 1399, rating: 4.6, review: 'Great fitness tracker, accurate heart rate monitoring.', image: '/Images/22.jpg' },
        flipkart: { price: 1249, rating: 4.3, review: 'Good product, comfortable to wear.', image: '/Images/22.jpg' }
      },
      23: {
        id: 23,
        name: 'boAt Flash',
        amazon: { price: 999, rating: 3.7, review: 'Decent earphones for the price.', image: '/Images/23.jpg' },
        flipkart: { price: 899, rating: 3.5, review: 'Not as expected, average quality.', image: '/Images/23.jpg' }
      },
      24: {
        id: 24,
        name: 'boAt Xtend Smart Watch',
        amazon: { price: 1199, rating: 3.9, review: 'Good smartwatch with useful features.', image: '/Images/24.jpg' },
        flipkart: { price: 1249, rating: 4.0, review: 'Value for money, stylish design.', image: '/Images/24.jpg' }
      },
      25: {
        id: 25,
        name: 'Fire-Boltt Ninja Call Pro Plus',
        amazon: { price: 1199, rating: 4.1, review: 'Decent quality earphones, good sound.', image: '/Images/25.jpg' },
        flipkart: { price: 1249, rating: 4.0, review: 'Nice product, comfortable fit.', image: '/Images/25.jpg' }
      },
      26: {
        id: 26,
        name: 'Noise ColorFit Ultra 3',
        amazon: { price: 2799, rating: 4.3, review: 'Great smartwatch with long battery life.', image: '/Images/26.jpg' },
        flipkart: { price: 2799, rating: 4.0, review: 'Satisfied with the purchase, good value.', image: '/Images/26.jpg' }
      },
      27: {
        id: 27,
        name: 'TIMEX iConnect EVO+',
        amazon: { price: 2395, rating: 3.1, review: 'Disappointing product, poor quality.', image: '/Images/27.jpg' },
        flipkart: { price: 3599, rating: 2.9, review: 'Not worth the price, expected better.', image: '/Images/27.jpg' }
      },
      28: {
        id: 28,
        name: 'Apple Watch SE (2nd Gen)',
        amazon: { price: 28900, rating: 4.6, review: 'Excellent smartwatch, highly recommend.', image: '/Images/28.jpg' },
        flipkart: { price: 28990, rating: 4.5, review: 'Great product, works flawlessly.', image: '/Images/28.jpg' }
      },
      29: {
        id: 29,
        name: 'Apple Watch Ultra',
        amazon: { price: 82900, rating: 4.8, review: 'Top-notch quality, worth every penny.', image: '/Images/29.jpg' },
        flipkart: { price: 81999, rating: 4.2, review: 'Good product, but a bit expensive.', image: '/Images/29.jpg' }
      },
      30: {
        id: 30,
        name: 'Samsung Galaxy Watch4',
        amazon: { price: 10999, rating: 4.6, review: 'Great smartwatch, love the design.', image: '/Images/30.jpg' },
        flipkart: { price: 10509, rating: 4.5, review: 'Happy with the purchase, great features.', image: '/Images/30.jpg' }
      
    },
    
    31: {
      id: 31,
      name: 'LEQTRONIQ Digital Camera 4K',
      amazon: { price: 17990, rating: 4.3, review: 'Excellent camera quality, worth the price.', image: '/Images/31.jpg' },
      flipkart: { price: 18199, rating: 4.1, review: 'Good camera, but slightly overpriced.', image: '/Images/31.jpg' }
    },
    32: {
      id: 32,
      name: 'Fujifilm Instax Mini 11',
      amazon: { price: 5999, rating: 4.0, review: 'Fun camera for instant photos, kids love it.', image: '/Images/32.jpg' },
      flipkart: { price: 4999, rating: 3.9, review: 'Decent camera, easy to use.', image: '/Images/32.jpg' }
    },
    33: {
      id: 33,
      name: 'Nikon D7500 20.9MP Digital SLR Camera',
      amazon: { price: 93950, rating: 4.6, review: 'Professional-grade camera, exceptional performance.', image: '/Images/33.jpg' },
      flipkart: { price: 99999, rating: 4.4, review: 'Great camera for photography enthusiasts.', image: '/Images/33.jpg' }
    },
    34: {
      id: 34,
      name: 'Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR',
      amazon: { price: 78989, rating: 4.5, review: 'Amazing mirrorless camera, great features.', image: '/Images/34.jpg' },
      flipkart: { price: 79999, rating: 4.3, review: 'Solid camera choice, good image quality.', image: '/Images/34.jpg' }
    },
    35: {
      id: 35,
      name: 'Canon EOS 1500D 24.1 Digital SLR Camera',
      amazon: { price: 43990, rating: 4.2, review: 'Good entry-level DSLR, easy to learn.', image: '/Images/35.jpg' },
      flipkart: { price: 41999, rating: 4.0, review: 'Decent camera for beginners.', image: '/Images/35.jpg' }
    },
    36: {
      id: 36,
      name: 'Lenovo Tab K10 FHD|10.3 Inch',
      amazon: { price: 13999, rating: 3.8, review: 'Affordable tablet with decent performance.', image: '/Images/36.jpg' },
      flipkart: { price: 13999, rating: 3.7, review: 'Okay tablet, nothing special.', image: '/Images/36.jpg' }
    },
    37: {
      id: 37,
      name: 'Xiaomi Pad 6',
      amazon: { price: 27790, rating: 4.0, review: 'Value for money tablet, good for entertainment.', image: '/Images/37.jpg' },
      flipkart: { price: 27999, rating: 3.9, review: 'Decent tablet, but could be better.', image: '/Images/37.jpg' }
    },
    38: {
      id: 38,
      name: 'HONOR Pad X9',
      amazon: { price: 15999, rating: 3.6, review: 'Average tablet, nothing exceptional.', image: '/Images/38.jpg' },
      flipkart: { price: 14599, rating: 3.5, review: 'Okay product, but expected more.', image: '/Images/38.jpg' }
    },
    39: {
      id: 39,
      name: 'Samsung Galaxy Tab A9',
      amazon: { price: 12704, rating: 3.9, review: 'Good tablet for daily use, reliable brand.', image: '/Images/39.jpg' },
      flipkart: { price: 13999, rating: 3.8, review: 'Decent performance, good battery life.', image: '/Images/39.jpg' }
    },
    40: {
      id: 40,
      name: 'Samsung Galaxy Tab S9',
      amazon: { price: 83990, rating: 4.3, review: 'Premium tablet with great features.', image: '/Images/40.jpg' },
      flipkart: { price: 83999, rating: 4.2, review: 'Satisfied with the product, good value.', image: '/Images/40.jpg' }
    },
    41: {
      id: 41,
      name: 'Ambrane Unbreakable 3A Fast Charging 1.5m',
      amazon: { price: 179, rating: 3.5, review: 'Decent quality cable, charges quickly.', image: '/Images/41.jpg' },
      flipkart: { price: 199, rating: 3.4, review: 'Okay cable, does the job.', image: '/Images/41.jpg' }
    },
    42: {
      id: 42,
      name: 'STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad',
      amazon: { price: 99, rating: 4.0, review: 'Good quality mouse pad, durable material.', image: '/Images/42.jpg' },
      flipkart: { price: 89, rating: 4.2, review: 'Excellent mouse pad, very comfortable.', image: '/Images/42.jpg' }
    },
    43: {
      id: 43,
      name: 'Logitech B170 Wireless Mouse, 2.4 GHz ',
      amazon: { price: 595, rating: 3.8, review: 'Decent wireless mouse, works well.', image: '/Images/43.jpg' },
      flipkart: { price: 599, rating: 4.0, review: 'Good mouse, easy to connect and use.', image: '/Images/43.jpg' }
    },
    44: {
      id: 44,
      name: 'HP v236w USB 2.0 64GB Pen Drive',
      amazon: { price: 396, rating: 4.1, review: 'Reliable pen drive, good storage capacity.', image: '/Images/44.jpg' },
      flipkart: { price: 349, rating: 4.3, review: 'Great pen drive, fast data transfer.', image: '/Images/44.jpg' }
    },
    45: {
      id: 45,
      name: 'STRIFF FLSB Laptop Stand, MacBook Stand',
      amazon: { price: 199, rating: 4.2, review: 'Sturdy laptop stand, ergonomic design.', image: '/Images/45.jpg' },
      flipkart: { price: 299, rating: 3.9, review: 'Decent laptop stand, could be more stable.', image: '/Images/45.jpg' }
    },
    46: {
      id: 46,
      name: 'USB C to Lightning Cable 1M',
      amazon: { price: 664, rating: 4.0, review: 'Good quality cable, fast charging.', image: '/Images/46.jpg' },
      flipkart: { price: 699, rating: 4.1, review: 'Nice cable, durable material.', image: '/Images/46.jpg' }
    },
    47: {
      id: 47,
      name: 'American Tourister Valex 28 Ltrs Large Laptop Backpack',
      amazon: { price: 1499, rating: 4.3, review: 'Spacious backpack, comfortable to carry.', image: '/Images/47.jpg' },
      flipkart: { price: 1599, rating: 4.2, review: 'Good quality backpack, value for money.', image: '/Images/47.jpg' }
    },
    48: {
      id: 48,
      name: 'SanDisk Ultra Dual 64 GB USB 3.0 OTG Pen Drive',
      amazon: { price: 619, rating: 4.0, review: 'Fast and reliable pen drive, good storage.', image: '/Images/48.jpg' },
      flipkart: { price: 659, rating: 4.1, review: 'Nice pen drive, easy to use.', image: '/Images/48.jpg' }
    },
    49: {
      id: 49,
      name: 'Logitech MK215 Wireless Keyboard and Mouse Combo',
      amazon: { price: 1345, rating: 4.2, review: 'Great combo, good quality keyboard and mouse.', image: '/Images/49.jpg' },
      flipkart: { price: 1399, rating: 4.3, review: 'Excellent combo, highly recommend.', image: '/Images/49.jpg' }
    },
    50: {
      id: 50,
      name: 'Logitech K480 Wireless Multi-Device Keyboard',
      amazon: { price: 2499, rating: 4.1, review: 'Nice wireless keyboard, comfortable to use.', image: '/Images/50.jpg' },
      flipkart: { price: 2459, rating: 4.0, review: 'Good keyboard, but connectivity issues.', image: '/Images/50.jpg' }
    }
    
  };

  return products[id];
};


export default ProductComparisonPage;
