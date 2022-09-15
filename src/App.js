import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { FaCloud } from "react-icons/fa";
import { createContext } from 'react';

// components 
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

import { Navbar } from "./components/Navbar";
import { Headphones } from "./headphones/Headphones";
import { Speakers } from "./speakers/Speakers";
import { Earphones } from "./earphones/Earphones";
import { Home } from "./components/Home";
import Cart from "./cart/Cart";
import { prettyDOM } from "@testing-library/react";

export const userContext = createContext()



function App() {

  const [selected, setSelected] = useState()
  const [prodArr, setProdArr] = useState(localStorage.getItem("speakers") ? JSON.parse(localStorage.getItem("speakers")) : [])
  const [EarphonesItem, setEarphonesItem] = useState(localStorage.getItem("earphones") ? JSON.parse(localStorage.getItem("earphones")) : [])
  const [total, setTotal] = useState(localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0)
  const [amount,setAmount] = useState(localStorage.getItem("amount") ? JSON.parse(localStorage.getItem("amount")):0)
  const [cart, setCart] = useState(localStorage.getItem("cart-item") ? JSON.parse(localStorage.getItem("cart-item")) : [])



  localStorage.setItem("cart-item", JSON.stringify(cart))
  localStorage.setItem("earphones", JSON.stringify(EarphonesItem))
  localStorage.setItem("speakers", JSON.stringify(prodArr))
  localStorage.setItem("total", JSON.stringify(total))
  localStorage.setItem("amount", JSON.stringify(amount))

  // headphones
  const items = [
    {
      name: "xx99 mark || headphones",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 159,
      id: Math.floor(Math.random() * 1000000)
    },
    {
      name: "xx99 mark | headphones",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 120,
      id: Math.floor(Math.random() * 1000000)
    },
    {
      name: "x99 mark || headphones",
      description: "This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!",
      img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 400,
      id: Math.floor(Math.random() * 1000000)
    },
  ]
  return (
    <>
      <userContext.Provider value={{ selected, setSelected, items, total, setTotal, cart, setCart,amount,setAmount }}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/earphones' element={<Earphones />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>

  );
}

export default App;
