import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export default () => (
  <div className='tcs is-lato'>
    <p className='content'>By using any of the images produced by Momentum Images or Melanie Preston you agree to the Terms and Conditions</p>
    <a href='https://momentumimages.co.uk/tcs.pdf'>
      <span className='icon'>
        <FontAwesomeIcon icon={faFilePdf} />
      </span>
      <span className='tcs-link'>Terms & Conditions</span>
    </a>
  </div>
)
