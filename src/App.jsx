import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import CartModal from './Components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id);
    if (productExists) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
      
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  };

  return (
    <div className="App bg-slate-100">
      {/* Navbar */}
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

      {/* Product Listing */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 p-8">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal 
          cart={cart} 
          closeCart={() => setIsCartOpen(false)} 
          removeFromCart={removeFromCart} 
        />
      )}
    </div>
  );
}

export default App;
