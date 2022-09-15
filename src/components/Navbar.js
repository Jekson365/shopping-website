import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import { Headercontent } from './Headercontent'

import App from '../App'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

import { useContext } from 'react'

import { userContext } from '../App'


export const Navbar = () => {

    const {amount} = useContext(userContext)

    const amountt = () => {
        var ready = false
        function parseItems(storage) {
            var parsed = JSON.parse(localStorage.getItem(storage))
            ready = true
            return parsed
        }
        if (ready) {
            
            var container1 = parseItems("cart-item").length
            var container2 = parseItems("speakers").length
            var sum = container1 + container2
        }
        return sum
    }


    const [nav, setNav] = useState(false)
    const [navBackColor, setNavBackColor] = useState()


    const [amountItem, setAmountItem] = useState(amountt())

    setInterval(() => {
        if (window.innerWidth > 800) {
            setNav(false)
        }
        if (window.scrollY == 0) {
            setNavBackColor(false)
        }
        if (window.scrollY > 350) {
            setNavBackColor(true)
        }
    }, 500)

    return (
        <>
            <header className='bl'>
                <h3 className='bars'>
                    <FaBars onClick={() => setNav(!nav)} />
                </h3>
                <h3 className='logo'>audiophile</h3>
                <nav className={nav ? "navigation navigation-on" : "navigation"}>
                    <li>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='/headphones'>
                            headphones
                        </a>
                    </li>
                    <li>
                        <a href='/speakers'>
                            speakers
                        </a>
                    </li>
                    <li>
                        <a href='/earphones'>
                            earphones
                        </a>
                    </li>
                </nav>
                <h3 className='cart'>
                    <p className='red-c'>{amount}</p>
                    <a href='/cart' className='cart-a' style={{"color":"red"}}>
                        <FaShoppingCart />
                    </a>
                </h3>
            </header>
        </>
    )
}
