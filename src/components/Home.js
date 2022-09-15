import React from 'react'
import { Headercontent } from './Headercontent'
import { Prodrow } from './Prodrow'
import { Row } from './Row'
import { Review } from './Review'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <div>
            <section className="section-1">
                <Headercontent />
            </section>
            <Prodrow />
            <Row />
            <Review />
        </div>
    )
}
