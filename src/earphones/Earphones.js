import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Animated } from 'react-animated-css'
import { useContext } from 'react'
import { userContext } from '../App'
import { Earphone } from '../speakers/Speakers'
import { Eachearphone } from './Eachearphone'



export const Earphones = () => {

  const [selected, setSelected] = useState()

  const { total, setTotal ,amount,setAmount} = useContext(userContext)

  const [prodArr, setProdArr] = useState(localStorage.getItem("earphones") ? JSON.parse(localStorage.getItem("earphones")) : [])
  localStorage.setItem("earphones", JSON.stringify(prodArr))


  const addToCart = (product) => {

    setProdArr([...prodArr, product])

    setTotal(total + product.price)

    setAmount(amount + 1)

  }

  const earphones = [
    {
      name: "earphone ex 1",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/2203056/pexels-photo-2203056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 159,
      id: Math.floor(Math.random() * 1000000)
    },
    {
      name: "earphone ex 2",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 120,
      id: Math.floor(Math.random() * 1000000)
    },
    {
      name: "earphone ex 3",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/744922/pexels-photo-744922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 400,
      id: Math.floor(Math.random() * 1000000)
    },
  ]

  return (
    <div>
      <Earphone.Provider value={{ selected, setSelected }}>

        <p className='header-title'>earphones</p>
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
          <button className='see-full-btn' onClick={() => addToCart(selected)}>add to cart</button>
        </Animated>
        <div className={selected ? "background-overlay" : ""}></div>
        <div className='prod-flex-container'>

          {earphones.map((single) => {
            return (
              <>
                <Eachearphone content={single} />
              </>
            )
          })}
        </div>
      </Earphone.Provider>
    </div>
  )
}
