import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './styles.css'

export const Cart = () => {

    const {state: {cart},
    dispatch,} = useContext(CartContext)
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
                                <p><b>Price:</b> {product.price}</p>
                            </div>
                        </div>
                        <div className='remove_cart'>
                        <button onClick={() =>dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product,
                        })} className='cart_btn remove rem_cart'>Remove</button>
                        </div>
                        </div>
                        
                    ))}
                </div>

            ) : (
                <h3 className='cart_empty'>Cart is Empty</h3>
            )}
        </div>
    )
}
