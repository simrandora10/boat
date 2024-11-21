import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const AdminProducts = () => {
  const [products, setProducts] = useState(productData);

  // Handle delete product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Handle add product
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `New Product ${products.length + 1}`,
      price: Math.floor(1000 + Math.random() * 9000), // Random price
      image: "https://via.placeholder.com/150", // Placeholder image
    };
    setProducts([...products, newProduct]);
  };

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Admin - Manage Products
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <p className="text-center text-gray-700 col-span-full">
              No products available.
            </p>
          ) : (
            products.map((product) => (
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
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate mb-3">
                    {product.name}
                  </h3>
                  <div className="flex flex-col md:flex-row md:space-x-2">
  <button
    onClick={() => handleDelete(product.id)}
    className="flex-1 py-2 bg-red-700 hover:bg-red-900 text-white text-sm font-medium rounded-lg transition text-center"
  >
    Delete
  </button>
  <Link to="/editproducts" state={product} className="flex-1">
    <button className="w-full py-2 bg-blue-700 hover:bg-blue-900 text-white text-sm font-medium rounded-lg transition text-center">
      Edit
    </button>
  </Link>
</div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Add Product Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleAddProduct}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-lg shadow-md transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
