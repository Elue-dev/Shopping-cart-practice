import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import './styles.css'

export const Cart = () => {

    const {state: {cart},
    dispatch,} = useContext(CartContext)
    const [total, setTotal] = useState()

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(cart))
    },[cart])

    return (
        <div className=' cart wrapper'>
            {cart.length > 0 ? (
                <div>
                    {cart.map(product => (<div className='cart_container'>
                        <div className='cart_flex' key = {product.id}>
                            <div>
                                <img  className='cart_image' src={product.image} alt={product.name} />
                            </div>
                            <div className='cart_details'>
                                <h4>{product.name}</h4>
                                <p><b>Price:</b> ${product.price}</p>
                            </div>
                        </div>
                        <div className='remove_cart'>
                        <button onClick={() =>dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product,
                        })} className='cart_btn remove rem_cart'>Remove from cart</button>
                        </div>
                        </div>
                        
                    ))}
                </div>

            ) : (
                <h3 className='cart_empty'>Cart is Empty</h3>
            )}

            <h3> Total Price: ${total} </h3>
        </div>
    )
}
