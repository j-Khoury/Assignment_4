// CartContext.tsx
import React, {createContext, useState} from 'react';

export interface Product {
  id: string;
  name: string;
  image: any;
  description: string;
  price: number;
  // Add any other properties related to your product
}

interface CartContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const contextValue: CartContextValue = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
