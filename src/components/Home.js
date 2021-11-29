import React, { useContext } from 'react'
import { stateData } from './data'
import './styles.css'
import { CartContext } from '../context/CartContext'

export const Home = () => {
    const {state: {cart},
    dispatch,} = useContext(CartContext)

    return (
        <div className='products wrapper'>
            {stateData.map(product => (
                <div className='product' key={product.id}>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <p><b>Price:</b> ${product.price}</p>
                    {cart.some(p => p.id ===product.id) ? (
                        <button onClick={() =>dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product,
                        })} className='cart_btn remove'>Remove from cart</button>
                    ) : (
                        <button onClick={() =>dispatch({
                            type: 'ADD_TO_CART',
                            payload: product,
                        })} className='cart_btn add'>Add to cart</button>
                    )}
                </div>
            ))}
        </div>
    )
}

// {stateData.map(product => (
//     <div className='product' key={product.id}>
//         <h3>{product.name}</h3>
//         <img src={product.image} alt={product.name} />
//         <p><b>Price:</b> {product.price}</p>
//         <button onClick={()=> addToCart(cart)} className='cart_btn'>Add to cart</button>
//         {/* <button onClick={() => removeFromCart(product.id)} className='cart_btn'>Remove from cart</button> */}
//     </div>
// ))}