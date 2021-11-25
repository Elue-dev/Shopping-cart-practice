import React, { createContext, useState, useReducer } from "react";
import { CartReducer } from "./CartReducer";
// import { stateData } from "../components/data";

export const CartContext = createContext()

export const CartProvider = (props) => {

    // const [cart, setCart] = useState([])

    const [state, dispatch] = useReducer(CartReducer, {
        cart:[]
    })

    // const addToCart = () => {
    //     setCart(prevCart=> [...prevCart, {cart} ])
    // }

    // const removeFromCart = (id) => {
    //     setCart(cart.filter(item => item.id !== id))
    // }

    return(
        <CartContext.Provider value={{state, dispatch}} >
            {props.children}
        </CartContext.Provider>
    )
}
// value={{cart, setCart, removeFromCart, addToCart}}