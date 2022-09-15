import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Calculator } from './Calculator'
import { userContext } from '../App'
import './cart.css'

const Cart = () => {
    const { cart, setCart } = useContext(userContext)

    const [list, setList] = useState()

    const [currentCart, setCurrentCart] = useState()

    const items = JSON.parse(localStorage.getItem('cart-item'))
    const speakers = JSON.parse(localStorage.getItem("speakers"))
    const earphones = JSON.parse(localStorage.getItem("earphones"))


    if (items && speakers && earphones) {
        var CART_ITEMS = items.concat(speakers, earphones)
        console.log(CART_ITEMS)
    }
    // if (items && speakers && earphones) {
    //     console.log(CART_ITEMS)
    // }







    return (
        <>
            <p className='header-title'>Cart</p>
            <div className='cart-container'>
                <div className='cart-items'>
                    {!CART_ITEMS ? <h1>Cart is empty</h1> : ""}
                    {CART_ITEMS && CART_ITEMS.map((single) => {
                        return (
                            <div className='each-cart-item'>
                                <div className='image-content'>
                                    <img src={single.img} />
                                </div>
                                <div className='desc'>
                                    <p>{single.description}</p>
                                </div>
                                <div className='namep'>
                                    <p>{single.name}</p>
                                    <p><b>{single.price} $</b></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='calculator'>
                    <h3>Calculator</h3>
                    <Calculator />
                </div>
            </div>
        </>
    )
}


export default Cart