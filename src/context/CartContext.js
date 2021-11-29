import React, { createContext, useState, useReducer, useEffect } from "react";
import { CartReducer } from "./CartReducer";


export const CartContext = createContext()


export const CartProvider = (props) => {

    const [state, dispatch] = useReducer(CartReducer, {
        cart:[]
    })

    return(
        <CartContext.Provider value={{state, dispatch}} >
            {props.children}
        </CartContext.Provider>
    )
}