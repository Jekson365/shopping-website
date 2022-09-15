import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='foot-col'>
                <div className='logo'>
                    <h3>audiophile</h3>
                </div>
                <div className='description'>
                    stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    Lorem Ipsum is simply dummy text of the printing and typesetting indu
                </div>
                <p className='copyright'>
                    copyright 2021 All rights Reserved
                </p>
            </div>
            <div className='foot-col flex-end'>
                <nav className='foot-nav fn-1'>
                    <li>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='/headphones'>
                            headphones
                        </a>
                    </li>
                    <li>
                        <a href='/speakrs'>
                            speakers
                        </a>
                    </li>
                    <li>
                        <a href='/earphones'>
                            earphones
                        </a>
                    </li>
                </nav>
                <nav className='foot-nav'>
                    <FaFacebook className='icn' />
                    <FaTwitter className='icn' />
                    <FaInstagram className='icn' />
                </nav>
            </div>
        </div>
    )
}
