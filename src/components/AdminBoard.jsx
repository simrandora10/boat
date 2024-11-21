import React from "react";
import { Link } from "react-router-dom";

const AdminBoard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-lg text-gray-400">Manage your products, users, and reviews here.</p>
        </header>

        {/* Admin Dashboard Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Manage Products Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Manage Products</h2>
            <p className="text-gray-300 mb-4">Add, edit, or delete products from your store.</p>
            <Link to="/adminproducts">
              <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md text-white text-lg">
                View Products
              </button>
            </Link>
          </div>

          {/* Manage Users Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Manage Users</h2>
            <p className="text-gray-300 mb-4">View, edit, or remove user accounts.</p>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-lg">
              View Users
            </button>
          </div>

          {/* Manage Reviews Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Manage Reviews</h2>
            <p className="text-gray-300 mb-4">Moderate and manage user-submitted reviews.</p>
            <Link to="/reviewsmanage">
              <button className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md text-white text-lg">
                View Reviews
              </button>
            </Link>
          </div>
        </div>

        {/* Admin Settings Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Admin Settings</h2>
          <p className="text-gray-300 mb-4">Adjust admin settings and preferences.</p>
          <button className="w-full py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-white text-lg">
            Manage Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
