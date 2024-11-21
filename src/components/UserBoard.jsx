import React, { useState } from "react";

const UserBoard = () => {
  // State for the profile information
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  // State for order history
  const [orders, setOrders] = useState([
    { id: 1, product: "Wireless Headphone", date: "2024-10-01", status: "Delivered" },
    { id: 2, product: "Bluetooth Earbuds", date: "2024-10-15", status: "Shipped" },
    { id: 3, product: "Gaming Headset", date: "2024-11-05", status: "Delivered" },
  ]);

  // State for password change form
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State for address form
  const [address, setAddress] = useState({
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  });

  // Handle profile edit
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // You can add validation and send an API request to update the profile
    alert("Profile updated!");
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      alert("New passwords do not match!");
    } else {
      // Update password logic goes here (API request, etc.)
      alert("Password updated!");
    }
  };

  // Handle address update
  const handleAddressUpdate = (e) => {
    e.preventDefault();
    // Handle address update logic here (API request, etc.)
    alert("Address updated!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">User Dashboard</h1>
          <p className="text-lg text-gray-400">Manage your profile, orders, and settings here.</p>
        </header>

        {/* Profile Overview */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Profile Overview</h2>
          <div className="space-y-4">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
          </div>
        </section>

        {/* Edit Profile Form */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Edit Profile</h2>
          <form onSubmit={handleProfileUpdate}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Address Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Shipping Address</h2>
          <form onSubmit={handleAddressUpdate}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="street">
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold text-gray-300" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full p-3 bg-gray-700 text-white rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold text-gray-300" htmlFor="state">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full p-3 bg-gray-700 text-white rounded-md"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="zip">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip"
                  value={address.zip}
                  onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md"
                >
                  Save Address
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Order History Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Order History</h2>
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-gray-300">You have no orders yet.</p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="bg-gray-700 p-4 rounded-md">
                  <p><strong>Product:</strong> {order.product}</p>
                  <p><strong>Date:</strong> {order.date}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Change Password Form */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="currentPassword">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={password.currentPassword}
                  onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={password.newPassword}
                  onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={password.confirmPassword}
                  onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                  className="w-full p-3 bg-gray-700 text-white rounded-md"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
                >
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UserBoard;
