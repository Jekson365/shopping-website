import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Animated } from 'react-animated-css'
import { useContext } from 'react'
import { Eachspeaker } from './Eachspeaker'
import { userContext } from '../App'
import { Toast } from '../components/Toast'

export const Earphone = createContext()

export const Speakers = () => {



  const [selected, setSelected] = useState()

  const { total, setTotal, amount, setAmount,toast } = useContext(userContext)

  const [prodArr, setProdArr] = useState(localStorage.getItem("speakers") ? JSON.parse(localStorage.getItem("speakers")) : [])
  localStorage.setItem("speakers", JSON.stringify(prodArr))


  const addToCart = (product) => {

    setProdArr([...prodArr, product])

    setTotal(total + product.price)

    setAmount(amount + 1)

  }

  const speakers = [
    {
      name: "Gigabyte",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 159,
      id: Math.floor(Math.random() * 1000000)
    },
    {
      name: "Kartingebii",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 120,
      id: Math.floor(Math.random() * 1000000)
    },
    {
      name: "Marshall",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 400,
      id: Math.floor(Math.random() * 1000000)
    },
  ]

  return (
    <div>
      <Animated animationIn='flipInX' animationInDuration='1500'>
        <p className='header-title'>speakers</p>
      </Animated>
      <Earphone.Provider value={{ selected, setSelected }}>

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
          <Toast toast={toast} />
          <p>{selected && selected.price} $</p>

          <button className='see-full-btn' onClick={() => addToCart(selected)}>add to cart</button>
        </Animated>
        <div className={selected ? "background-overlay" : ""}></div>
        <div className='prod-flex-container'>

          {speakers.map((single) => {
            return (
              <>
                <Eachspeaker content={single} />
              </>
            )
          })}
        </div>
      </Earphone.Provider>
    </div>
  )
}
