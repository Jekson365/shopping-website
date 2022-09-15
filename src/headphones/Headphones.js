import React from 'react'
import './style.css'
import { Eachitem } from './Eachitem'
import { useContext } from 'react'
import { Chosen } from './Chosen'
import { userContext } from '../App'
import { Animated } from 'react-animated-css'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

export const Headphones = () => {
  const { selected, setSelected, items, setCart, cart, total, setTotal,amount,setAmount } = useContext(userContext)

  // localStorage.setItem("cart-item", JSON.stringify(cart))
  // localStorage.setItem("total", JSON.stringify(total))


  const handleCartAdd = (selectedItem) => {
    setCart([...cart, selectedItem])

    setTotal(total + selected.price)
    // save to localstorage 

    setAmount(amount + 1)



  }




  return (
    <div>

      <p className='header-title'>HEADPHONES</p>

      <Animated
        className={selected ? "selected-item" : "selected-item selected-item-deactive"}
        style={{ "top": window.scrollY - 150 }} animationInDuration="500">
        <div className='content-upper'>
          <h5>{selected && selected.name}</h5>
          <h3 onClick={() => setSelected("")}><FaTimes /></h3>
        </div>
        <div className='image-container'>
          <img src={selected && selected.img} />
        </div>
        <p>{selected && selected.price} $</p>
        <button className='see-full-btn' onClick={() => handleCartAdd(selected)}>add to cart</button>
      </Animated>

      <div className={selected ? "background-overlay" : ""}></div>
      <div className='prod-flex-container'>
        {items.map((single) => {
          return (
            <>
              <Eachitem content={single} />
            </>
          )
        })}
      </div>
    </div>
  )
}
