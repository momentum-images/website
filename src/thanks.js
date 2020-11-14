import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

export default () => {
  const { search } = useLocation()
  const { name } = qs.parse(search, { ignoreQueryPrefix: true })
  return (
    <div className='thanks is-lato'>
      {name && <h1 className='title'>Thanks, {name}</h1>}
      {!name && <h1 className='title'>Thank You</h1>}
      <p className='content'>
        Thank you for getting in contact with Momentum Images<br />
        We will try to get back to you as soon as possible<br />Until then please like us on <a href='https://www.facebook.com/momentum.images.uk' target='_blank' rel='noopener noreferrer'>Facebook</a> or follow us on <a href='https://www.instagram.com/momentum.images' target='_blank' rel='noopener noreferrer'>Instagram</a>
      </p>
    </div>
  )
}
