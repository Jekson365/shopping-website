import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import { FaTimes } from 'react-icons/fa'
import { Earphone } from './Speakers'

export const Eachspeaker = ({ content }) => {

    const {setSelected,selected} = useContext(Earphone)

    return (
        <>
            <Animated className='prod-item' animationIn='slideInLeft' animationInDuration='700'>
                <div className='item-col col-con'>
                    <h1 className='title'>{content.name}</h1>
                    <p className='description-prod'>
                        {content.description}
                    </p>
                    <a className='see-full-btn' onClick={() => setSelected(content)}>see product</a>
                </div>
                <div className='item-col'>
                    <img src={content.img} />
                </div>
            </Animated>
        </>
    )
}
