import React, { useState, useEffect } from 'react'
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import Brand from './brand'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import MetaData from './meta-data'
import Image from './image'

const RouteHead = ({
  path,
  header,
  title,
  description,
  src
}) => (
  <div className='route-head'>
    <MetaData
      path={path}
      title={title}
      description={description}
      image={`/images/${src}-meta.jpg`}
    />
    <div className='image is-3by1'>
      <Image src={`/${src}-title`} alt={description} lazy={false} />
    </div>
    <div className='container'>
      <h1>{header}</h1>
    </div>
  </div>
)

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
      <Switch>
        <Route exact path='/about'>
          <RouteHead
            header='About'
            path='/about'
            title='Momentum Images - About'
            description='Learn more about Momentum Images from who we are to what we do'
            src='about'
          />
        </Route>
        <Route exact path='/tcs'>
          <RouteHead
            header="T&C's"
            path='/tcs'
            title="Momentum Images - T&C's"
            description='The outline of our Terms and Conditions for Momentum Images'
            src='tcs'
          />
        </Route>
        <Route exact path='/contact'>
          <RouteHead
            header='Contact'
            path='/contact'
            title='Momentum Images - Contact'
            description='Get in touch via email, Facebook or Instagram with us at Momentum Images'
            src='contact'
          />
        </Route>
        <Route exact path='/portfolio/dance'>
          <RouteHead
            header='Dance'
            path='/portfolio/dance'
            title='Momentum Images - Dance Portfolio'
            description='Our greatest and latest dance photos taken by Momentum Images with the backdrop of the Lake District'
            src='portfolio_dance'
          />
        </Route>
        <Route exact path='/portfolio/family'>
          <RouteHead
            header='Family'
            path='/portfolio/family'
            title='Momentum Images - Family Portfolio'
            description='Our greatest and latest family photos taken by Momentum Images with the backdrop of the Lake District'
            src='portfolio_family'
          />
        </Route>
        <Route exact path='/portfolio/portrait'>
          <RouteHead
            header='Portrait'
            path='/portfolio/portrait'
            title='Momentum Images - Portrait Portfolio'
            description='Our greatest and latest portrait photos taken by Momentum Images with the backdrop of the Lake District'
            src='portfolio_portrait'
          />
        </Route>
        <Route exact path='/'>
          <RouteHead
            path='/'
            title='Momentum Images'
            header='Momentum Images'
            description='Momentum Images creates high-quality images in the inspirational backdrop of the Lake District'
            src='home'
          />
        </Route>
        <Route exact path='/thanks'>
          <RouteHead
            header='Thank You'
            path='/thanks'
            title='Momentum Images - Thanks'
            description='Thank you for getting in touch, we will get back to you as soon as possible'
            src='home'
          />
        </Route>
        <Route>
          <RouteHead
            header='Momentum Images'
            path='/'
            title='404 Not Found'
            description='Momentum Images creates high-quality images in the inspirational backdrop of the Lake District'
            src='not_found'
          />
        </Route>
      </Switch>

      <div className='hero-head'>
        <nav className='navbar is-fixed-top'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item'>
                <Brand />
                <span className='sr-only'>Home</span>
              </Link>
              <span className='navbar-burger burger' onClick={() => { setActive(!active) }}>
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className={`navbar-menu is-${active ? 'active' : 'inactive'}`}>
              <div className='navbar-end'>
                <a className='navbar-item is-inline-block' href='https://www.facebook.com/momentum.images.uk' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>
                <a className='navbar-item is-inline-block' href='https://www.instagram.com/momentum.images' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
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
                    <Link className='navbar-item' to='/portfolio/portrait'>
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
