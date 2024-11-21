import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AiOutlineCheckCircle } from "react-icons/ai";

const DetailedView = () => {
  const { state: product } = useLocation(); // Get the product details from state
  const { addToCart } = useCart(); // Access the cart context
  const navigate = useNavigate(); // For navigation

  if (!product) {
    return <p className="text-center text-gray-500 mt-10">Product not found.</p>;
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 max-w-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <p className="text-2xl font-bold text-green-600 mb-6">
                ₹{product.price.toLocaleString()}
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <AiOutlineCheckCircle className="text-green-500 mr-2" />
                  Free Delivery
                </li>
                <li className="flex items-center text-gray-700">
                  <AiOutlineCheckCircle className="text-green-500 mr-2" />
                  1 Year Warranty
                </li>
                <li className="flex items-center text-gray-700">
                  <AiOutlineCheckCircle className="text-green-500 mr-2" />
                  24/7 Customer Support
                </li>
                <li className="flex items-center text-gray-700">
                  <AiOutlineCheckCircle className="text-green-500 mr-2" />
                  Secure Payments
                </li>
              </ul>

              <div className="flex space-x-4">
                <button
                  onClick={() => addToCart(product)}
                  className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition duration-300"
                >
                  Back to Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedView;
