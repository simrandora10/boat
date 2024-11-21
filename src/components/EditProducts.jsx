import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const EditProducts = () => {
  const location = useLocation();
  const product = location.state;

  // If no product is passed, handle gracefully
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-800">No product selected for editing.</p>
        <Link to="/adminproducts">
          <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSaveChanges = () => {
    // You can implement actual save logic here
    console.log("Saved Product:", { id: product.id, name, price });
    alert("Product updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Product
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Price (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleSaveChanges}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
            <Link to="/adminproducts">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
