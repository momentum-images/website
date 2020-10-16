import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchImages from './fetch-images'
import Image from './image'

export default () => {
  const { portfolio } = useParams()
  const [state, setState] = useState({ images: [] })
  const { images } = state

  const load = async () => {
    const images = await fetchImages(portfolio)
    setState({ images })
  }

  useEffect(() => {
    if (images.length === 0) load()
  }, [portfolio, images, fetchImages])
  return (
    <div className='portfolio'>
      <div className='columns is-multiline'>
        {images.map(({ file, name, size = 'half' }) => (
          <div key={file} className={`column is-${size}`}>
            <Image
              src={`/portfolio/${portfolio}/${file}`}
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
