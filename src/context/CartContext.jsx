import { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartData = useCart();

  return (<CartContext.Provider value={cartData}>
      {children}
  </CartContext.Provider>
  );
}

const useCartContext = () => {
  return useContext(CartContext);
}

export { CartContext, CartProvider, useCartContext };