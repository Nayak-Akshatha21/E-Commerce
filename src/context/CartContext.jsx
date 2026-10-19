import { createContext , useContext} from "react";
import { initialProducts } from "../data/product";
import React from 'react'


const CartContext = createContext();


export const CartProvider = (props) => {
    const products = initialProducts;
  return (
    <>
      <CartContext.Provider value={{products}}>{props.children}</CartContext.Provider>
    </>
  )
}


export const useCart = () => useContext(CartContext);
