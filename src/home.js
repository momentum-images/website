import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <ul>
      <li className='home-link'>
        <Link to='/portfolio/dance'>
          <img src='/home/Lia-dance-14.jpg' />
          <div className='home-link-label'>DANCE</div>
        </Link>
      </li>
      <li className='home-link'>
        <Link to='/portfolio/family'>
          <img src='/home/Stanley-28.jpg' />
          <div className='home-link-label'>FAMILY</div>
        </Link>
      </li>
      <li className='home-link'>
        <Link to='/portfolio/portrait'>
          <img src='/home/Marie-wm-1.jpg' />
          <div className='home-link-label'>PORTRAIT</div>
        </Link>
      </li>
    </ul>
  </div>
)
