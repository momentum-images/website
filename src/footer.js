import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <footer className='footer is-lato'>
    <section className='section'>
      <div className='container'>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              Melanie Preston
            </div>
            <div className='level-item is-hidden-touch'>
              -
            </div>
            <div className='level-item'>
              Momentum Images 2020
            </div>
          </div>
          <div className='level-left'>
            <div className='level-item'>
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
          </div>
        </div>
      </div>
    </section>
  </footer>
)
