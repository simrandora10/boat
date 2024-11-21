import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, decreaseQuantity, addToCart } = useCart();

  const handleIncreaseQuantity = (item) => {
    // Increment quantity
    addToCart(item);
  };

  // Debugging: Log the entire cart
  console.log("Cart data: ", cart);

  // Calculate total cart value with proper type checking
  const totalPrice = cart.reduce((acc, item) => {
    // Ensure price and quantity are numbers
    const price = parseFloat(item.price);  // Ensure price is a valid number
    const quantity = parseInt(item.quantity, 10);  // Ensure quantity is a valid integer

    // Log each item's price and quantity
    console.log("Item: ", item, "Price: ", price, "Quantity: ", quantity);

    // Check if price and quantity are valid numbers
    if (isNaN(price) || isNaN(quantity)) {
      console.log("Invalid price or quantity for item: ", item);  // Debug invalid items
      return acc; // Skip invalid items
    }

    return acc + price * quantity;
  }, 0);

  return (
    <section className="bg-white py-16" id="cart">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-black text-center mb-10">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg"
              >
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

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-yellow-400 text-white rounded-full"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">{item.quantity}</span>

                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="px-2 py-1 bg-green-500 text-white rounded-full"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-full"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Display Total Price if cart has items */}
        {cart.length > 0 && (
          <div className="mt-8 text-right">
            <h3 className="text-lg font-semibold">Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/checkout"
            className="bg-green-500 text-white py-2 px-6 rounded-lg"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
