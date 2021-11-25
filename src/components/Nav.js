import React, { useContext } from 'react'
import './styles.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const Nav = () => {

    const {state} = useContext(CartContext)
    return (
        <div className='nav'>
            <div className='nav_items wrapper'>
                <Link to='/'><div className='logo'>Shop<span>Hub</span></div></Link>
                <Link to='/cart'><div className='cart_icon'><i className="fas fa-shopping-cart"></i> <span>{state.cart.length}</span></div></Link>
            </div>
        </div>
    )
}
