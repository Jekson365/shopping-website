import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { userContext } from '../App'

export const Calculator = () => {
    const { cart, total ,setCart,setTotal} = useContext(userContext)


    
    const clearCart = () => {
        setCart("")
        setTotal(0)
        
        localStorage.setItem('cart-item',[])        
        localStorage.setItem('earphones',[])        
        localStorage.setItem('speakrs',[])        
        localStorage.setItem('total',0)        
        localStorage.setItem("amount",0)        
    }


    return (
        <div>
            <p>
                Total: {total}
            </p>
            <div className='buttons'>
                <button className='btn btn-danger' onClick={clearCart}>Clear</button>
                <button className='btn btn-primary'>Checkout</button>
            </div>
        </div>
    )
}   
