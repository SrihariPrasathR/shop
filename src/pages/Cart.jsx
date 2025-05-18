
import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-3 border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-right font-bold text-xl">Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
