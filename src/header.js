import React from 'react'
import Icon from './icon'

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
                  <a href='/baco'>LINK 1</a>
                  <a href='/baco'>LINK 1</a>
                  <a href='/baco'>LINK 1</a>
                  <a href='/baco'>LINK 1</a>
                </div>
              </div>
              <div className='column'>
                <Icon />
              </div>
              <div className='column'>
                <a>SM1</a>
                <a>SM2</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
