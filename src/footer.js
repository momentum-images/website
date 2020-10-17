import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

export default () => {
  const history = useHistory()
  return (
    <footer className='footer'>
      <section className='section'>
        <div className='container'>
          <ul>
            <li className='footer-link'>
              <button className='button is-white is-large' onClick={() => { history.push('/contact') }}>
                <span className='icon'>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </span>
                <span>CONTACT</span>
              </button>
            </li>
            <li className='footer-link'>
              <button className='button is-white is-large' onClick={() => { history.push('/about') }}>
                <span className='icon'>
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <span>ABOUT</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
