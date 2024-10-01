import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">ECom Store</h1>
      <button 
        className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300" 
        onClick={openCart}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
