import React from 'react'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'

export const Prodrow = () => {
    const items = [
        {
            name:"Headphones",
            img:"https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        },
        {
            name:'Speakers',
            img:"https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name:"earphones",
            img:"https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
  return (
    <div className='categories'>
        {items.map((single)=> {
            return (
                <div className='cat-item'>
                    <img src={single.img}/>
                    <p className='title'>{single.name}</p>
                    <p className='shop'>Shop<span className='arr'>
                        <FaLongArrowAltRight className='arr'/>
                        </span></p>
                </div>

            )
        })}
    </div>
  )
}
