import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className='portfolio-links'>
    <ul>
      <li className='portfolio-link'>
        <Link to='/portfolio/dance'>
          <img src='/home/Lia-dance-14.jpg' />
          <div className='portfolio-link-label'>DANCE</div>
        </Link>
      </li>
      <li className='portfolio-link'>
        <Link to='/portfolio/family'>
          <img src='/home/Stanley-28.jpg' />
          <div className='portfolio-link-label'>FAMILY</div>
        </Link>
      </li>
      <li className='portfolio-link'>
        <Link to='/portfolio/portrait'>
          <img src='/home/Marie-wm-1.jpg' />
          <div className='portfolio-link-label'>PORTRAIT</div>
        </Link>
      </li>
    </ul>
  </div>
)
