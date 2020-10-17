import React from 'react'
import Icon from './icon'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <header>
      <section className='hero is-black'>
        <div className='hero-image-container'>
          <div className='hero-image-shadow' />
          <img className='hero-image' src='/Marie-wm-1.jpg' />
        </div>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <div className='hero-links'>
                  <Link to='/about'>ABOUT</Link>
                  <Link to='/contact'>CONTACT</Link>
                </div>
              </div>
              <div className='column'>
                <Link to='/'>
                  <Icon />
                </Link>
              </div>
              <div className='column'>
                <a href='https://www.instagram.com/momentum.images'>INSTA</a>
                <a href='https://www.facebook.com/momentum.images.uk'>FB</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
