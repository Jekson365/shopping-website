import React from 'react'
import { useContext } from 'react'
import { Animated } from 'react-animated-css'
import { Earphone } from '../speakers/Speakers'

export const Eachearphone = ({content}) => {
    const { selected, setSelected } = useContext(Earphone)

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
