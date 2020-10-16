import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import fetchImages from './fetch-images'
import Image from './image'

export default () => {
  const { portfolio, file } = useParams()

  const [state, setState] = useState({ images: [] })
  const { images } = state

  const load = async () => {
    const images = await fetchImages(portfolio)
    setState({ images })
  }

  useEffect(() => {
    if (images.length === 0) load()
  })

  return (
    <div className='carousel' style={{ height: window.innerHeight }}>
      {/* <Link className='carousel-link is-left' to={`/portfolio/${portfolio}/${file}`}>L</Link> */}
      <Image src={`/portfolio/${portfolio}/${file}.jpg`} alt={file} />
      {/* <Link className='carousel-link is-right' to={`/portfolio/${portfolio}/${file}`}>R</Link> */}
    </div>
  )
}
