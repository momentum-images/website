import React from 'react'
import { Link } from 'react-router-dom'
import Image from './image'

export default () => (
  <>
    <div>
      <ul>
        <li className='home-link is-oswald'>
          <Link to='/portfolio/dance'>
            <div className='image is-3by1'>
              <Image src='portfolio_dance-title' alt='Leaping daner in The Lakes' lazy={false} />
              <div className='home-link-label'>DANCE</div>
            </div>
          </Link>
        </li>
        <li className='home-link is-oswald'>
          <Link to='/portfolio/family'>
            <div className='image is-3by1'>
              <Image src='portfolio_family-title' alt='Mum and baby in The Lakes' lazy={false} />
              <div className='home-link-label'>FAMILY</div>
            </div>
          </Link>
        </li>
        <li className='home-link is-oswald'>
          <Link to='/portfolio/portrait'>
            <div className='image is-3by1'>
              <Image src='portfolio_portrait-title' alt='Woman in The Lakes' lazy={false} />
              <div className='home-link-label'>PORTRAIT</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </>
)
