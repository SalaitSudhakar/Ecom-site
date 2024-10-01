import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border-2 shadow-md p-4 rounded-md hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button 
        className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-400 hover:text-black"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
