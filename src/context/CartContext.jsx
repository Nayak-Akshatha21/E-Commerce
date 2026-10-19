import { createContext, useContext } from "react";
import { initialProducts } from "../data/product";
import React from 'react'
import { useState } from "react";


const CartContext = createContext();


export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const products = initialProducts;

  //add item into the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  //remove item from the cart
  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if(!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== productId)
      } else {
        return prevCart.map(item=> item.id === productId ? {...item, quantity: item.quantity - 1}
          :item)
      }
    });
  }


  const clearCart = () =>{
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider value={{ products }}>{props.children}</CartContext.Provider>
    </>
  )
}


export const useCart = () => useContext(CartContext);
