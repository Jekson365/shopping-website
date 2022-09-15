import React, { useEffect, useState } from 'react'
import { Chosen } from './Chosen'

import { userContext } from '../App'

import { useContext } from 'react'
import { Animated } from 'react-animated-css'

export const Eachitem = ({ content }) => {

    const {selected,setSelected} = useContext(userContext)




    return (
        <>
            <Animated className='prod-item' animationIn='slideInRight' animationInDuration="800">
                <div className='item-col col-con'>
                    <h1 className='title'>{content.name}</h1>
                    <p className='description-prod'>
                        {content.description}
                    </p>
                    <a className='see-full-btn' onClick={()=>setSelected(content)}>see product</a>
                </div>
                <div className='item-col'>
                    <img src={content.img} />
                </div>
            </Animated>
        </>
    )
}
