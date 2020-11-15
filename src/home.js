import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <>
    <div>
      <ul>
        <li className='home-link is-oswald'>
          <Link to='/portfolio/dance'>
            <div className='image is-3by1'>
              <img src='/portfolio_dance-title.jpg' alt='Leaping daner in The Lakes' />
              <div className='home-link-label'>DANCE</div>
            </div>
          </Link>
        </li>
        <li className='home-link is-oswald'>
          <Link to='/portfolio/family'>
            <div className='image is-3by1'>
              <img src='/portfolio_family-title.jpg' alt='Mum and baby in The Lakes' />
              <div className='home-link-label'>FAMILY</div>
            </div>
          </Link>
        </li>
        <li className='home-link is-oswald'>
          <Link to='/portfolio/portrait'>
            <div className='image is-3by1'>
              <img src='/portfolio_portrait-title.jpg' alt='Woman in The Lakes' />
              <div className='home-link-label'>PORTRAIT</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </>
)
