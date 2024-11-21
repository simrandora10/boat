import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Payment = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePaymentSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    alert("Payment Successful!");
  };

  return (
    <section className="bg-white py-16" id="payment">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-black text-center mb-10">Payment</h1>

        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your cart is empty. Add items to cart before proceeding.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side: Cart Summary */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-right mt-6">
                <h3 className="text-lg font-semibold">Total: ₹{totalPrice}</h3>
              </div>
            </div>

            {/* Right side: Payment Method */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="payment-method" className="text-lg font-medium">Payment Method</label>
                  <select
                    id="payment-method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Select a payment method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="upi">UPI</option>
                    <option value="net-banking">Net Banking</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>

                {/* Payment Details for Credit/Debit Cards */}
                {(paymentMethod === "credit-card" || paymentMethod === "debit-card") && (
                  <div>
                    <div className="flex flex-col">
                      <label htmlFor="card-number" className="text-lg font-medium">Card Number</label>
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="expiry-date" className="text-lg font-medium">Expiry Date</label>
                      <input
                        type="text"
                        id="expiry-date"
                        name="expiry-date"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="cvv" className="text-lg font-medium">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Payment Details for PayPal */}
                {paymentMethod === "paypal" && (
                  <div>
                    <div className="flex flex-col">
                      <label htmlFor="paypal-email" className="text-lg font-medium">PayPal Email</label>
                      <input
                        type="email"
                        id="paypal-email"
                        name="paypal-email"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Payment Details for UPI */}
                {paymentMethod === "upi" && (
                  <div>
                    <div className="flex flex-col">
                      <label htmlFor="upi-id" className="text-lg font-medium">UPI ID</label>
                      <input
                        type="text"
                        id="upi-id"
                        name="upi-id"
                        className="p-3 border border-gray-300 rounded-lg"
                        placeholder="Enter UPI ID (Google Pay, PhonePe, etc.)"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Payment Details for Net Banking */}
                {paymentMethod === "net-banking" && (
                  <div>
                    <div className="flex flex-col">
                      <label htmlFor="bank-name" className="text-lg font-medium">Bank Name</label>
                      <select
                        id="bank-name"
                        name="bank-name"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select Your Bank</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="sbi">SBI (State Bank of India)</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                        <option value="yes">YES Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                        {/* Add more banks as per your requirement */}
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="net-banking-username" className="text-lg font-medium">Net Banking Username</label>
                      <input
                        type="text"
                        id="net-banking-username"
                        name="net-banking-username"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="net-banking-password" className="text-lg font-medium">Net Banking Password</label>
                      <input
                        type="password"
                        id="net-banking-password"
                        name="net-banking-password"
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Payment Details for Cash on Delivery */}
                {paymentMethod === "cod" && (
                  <div className="text-sm text-gray-600">
                    <p className="text-lg font-medium">You have selected Cash on Delivery (COD). Please be ready with the exact cash on delivery.</p>
                  </div>
                )}

                {/* Empty Rows for Styling */}
                {!paymentMethod && (
                  <div className="flex flex-col">
                    <label className="text-lg font-medium">Payment Details</label>
                    <input type="text" className="p-3 border border-gray-300 rounded-lg" disabled />
                  </div>
                )}

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-6 rounded-lg"
                  >
                    Complete Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Payment;
