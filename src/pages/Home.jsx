
import React from 'react';

const products = [
  { id: 1, name: "Apples", price: 2.99, image: "/images/apples.jpg" },
  { id: 2, name: "Bananas", price: 1.99, image: "/images/bananas.jpg" },
  { id: 3, name: "Carrots", price: 0.99, image: "/images/carrots.jpg" },
  { id: 4, name: "Tomatoes", price: 3.49, image: "/images/tomatoes.jpg" },
  { id: 5, name: "Potatoes", price: 1.49, image: "/images/potatoes.jpg" },
];

function Home({ addToCart }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Fresh Groceries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded shadow hover:shadow-lg p-4 flex flex-col">
            <img
  src={process.env.PUBLIC_URL + product.image}
  alt={product.name}
  className="h-40 w-full object-cover mb-4 rounded"
/>

            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-green-700 font-bold mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
