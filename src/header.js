import React, { useState, useEffect } from 'react'
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import Brand from './brand'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () => {
  const [active, setActive] = useState(false)

  const history = useHistory()
  useEffect(() => {
    history.listen((location, action) => {
      setActive(false)
    })
  })

  return (
    <section className='hero is-black is-oswald'>
      <div className='image is-3by1'>
        <div className='hero-image-shadow' />
        <Switch>
          <Route exact path='/about'>
            <img src='/about.jpg' alt='Funny baby' />
          </Route>
          <Route exact path='/tcs'>
            <img src='/tcs.jpg' alt='Ghost on a bench in The Lakes' />
          </Route>
          <Route exact path='/contact'>
            <img src='/contact.jpg' alt='Woman at Rydal Caves' />
          </Route>
          <Route exact path='/portfolio/dance'>
            <img src='/dance.jpg' alt='Leaping daner in The Lakes' />
          </Route>
          <Route exact path='/portfolio/family'>
            <img src='/family.jpg' alt='Mum and baby in The Lakes' />
          </Route>
          <Route exact path='/portfolio/portrait'>
            <img src='/portrait.jpg' alt='Woman in The Lakes' />
          </Route>
          <Route>
            <img src='/home.jpg' alt='Woman at Rydal Caves' />
          </Route>
        </Switch>
      </div>
      <div className='hero-head'>
        <nav className='navbar is-fixed-top'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item'>
                <Brand />
              </Link>
              <span className='navbar-burger burger' onClick={() => { setActive(!active) }}>
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className={`navbar-menu is-${active ? 'active' : 'inactive'}`}>
              <div className='navbar-end'>
                <div className='navbar-item'>
                  <a href='https://www.facebook.com/momentum.images.uk' target='_blank' rel='noopener noreferrer'>
                    <span className='icon'>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </a>
                  <a href='https://www.instagram.com/momentum.images' target='_blank' rel='noopener noreferrer'>
                    <span className='icon'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </a>
                </div>
                <Link to='/' className='navbar-item' onClick={() => { setActive(false) }}>
                  Home
                </Link>
                <div className='navbar-item has-dropdown is-hoverable'>
                  <Link className='navbar-link' to='/portfolio'>
                    Portfolio
                  </Link>
                  <div className='navbar-dropdown'>
                    <Link className='navbar-item' to='/portfolio/dance'>
                      Dance
                    </Link>
                    <Link className='navbar-item' to='/portfolio/family'>
                      Family
                    </Link>
                    <Link className='navbar-item' to='/portfolio/dance'>
                      Portait
                    </Link>
                  </div>
                </div>

                <Link to='/about' className='navbar-item' onClick={() => { setActive(false) }}>
                  About
                </Link>
                <Link to='/tcs' className='navbar-item' onClick={() => { setActive(false) }}>
                  T&Cs
                </Link>
                <Link to='/contact' className='navbar-item' onClick={() => { setActive(false) }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
