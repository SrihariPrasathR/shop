
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cart.length} />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
