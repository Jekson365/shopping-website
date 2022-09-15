import React from 'react'
import { useContext } from 'react'
import { Earphone } from '../speakers/Speakers'

export const Eachearphone = ({content}) => {
    const { selected, setSelected } = useContext(Earphone)

    return (
        <>
            <div className='prod-item'>
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
            </div>
        </>
    )
}
