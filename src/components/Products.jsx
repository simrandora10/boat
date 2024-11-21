import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Assuming you have a CartContext
import { useNavigate } from "react-router-dom"; // For navigation

import product1 from "../assets/Products/Product1.png";
import product2 from "../assets/Products/Product2.webp";
import product3 from "../assets/Products/Product3.jpg";
import product4 from "../assets/Products/Product4.png";
import product5 from "../assets/Products/Product5.jpg";
import product6 from "../assets/Products/Product6.png";
import product7 from "../assets/Products/Product7.png";
import product8 from "../assets/Products/Product8.png";
import product9 from "../assets/Products/Product9.jpg";
import product10 from "../assets/Products/Product10.webp";
import product11 from "../assets/Products/Product11.webp";
import product12 from "../assets/Products/Product12.webp";

const productData = [
  { id: 1, name: "Wireless Headphone", price: 1199, image: product1 },
  { id: 2, name: "Bluetooth Earbuds", price: 1299, image: product2 },
  { id: 3, name: "Noise Cancelling Headphones", price: 1499, image: product3 },
  { id: 4, name: "Gaming Headset", price: 1999, image: product4 },
  { id: 5, name: "Over-Ear Headphones", price: 1799, image: product5 },
  { id: 6, name: "Smart Watch", price: 2499, image: product6 },
  { id: 7, name: "Fitness Band", price: 1999, image: product7 },
  { id: 8, name: "Portable Speaker", price: 1599, image: product8 },
  { id: 9, name: "Wired Gaming Mouse", price: 999, image: product9 },
  { id: 10, name: "Mechanical Keyboard", price: 2999, image: product10 },
  { id: 11, name: "Webcam 1080p", price: 1999, image: product11 },
  { id: 12, name: "RGB Gaming Chair", price: 10999, image: product12 },
];

const Products = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState(""); // For the search query
  const [wishlist, setWishlist] = useState([]); // State for wishlist tracking
  const navigate = useNavigate(); // For navigation

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  const handleAddToWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      // Toggle productId in the wishlist
      if (prevWishlist.includes(productId)) {
        // If already in wishlist, remove it
        return prevWishlist.filter((id) => id !== productId);
      } else {
        // If not in wishlist, add it
        return [...prevWishlist, productId];
      }
    });
  };

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-gray-800 py-16" id="products">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Our Collection</h1>
        </div>

        {/* Search Bar */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="p-4 w-96 border-2 border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"

            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-700 col-span-full">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-white flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                    ₹{product.price.toLocaleString()}
                  </span>

                  {/* Heart Icon (Wishlist) */}
                  <button
                    className={`absolute top-2 left-2 text-2xl ${wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-400'}`}
                    onClick={() => handleAddToWishlist(product.id)}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate mb-3">
                    {product.name}
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleViewDetails(product)}
                      className="w-1/2 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-1/2 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
