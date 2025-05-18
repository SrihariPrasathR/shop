
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">GroceryShop</Link>
      <div className="space-x-6 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/cart" className="relative">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 rounded-full text-xs px-2">{cartCount}</span>
          )}
        </Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
