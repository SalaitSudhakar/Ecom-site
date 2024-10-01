import React from 'react';

const CartModal = ({ cart, closeCart, removeFromCart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-3/4 md:w-1/2 p-8 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button className="text-red-500" onClick={closeCart}>
            Close
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div className="flex-grow mx-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <button 
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
