import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchImages from './fetch-images'
import Image from './image'

export default () => {
  const { portfolio } = useParams()
  const [state, setState] = useState({ images: [] })
  const { images } = state

  console.log(portfolio)

  const load = async () => {
    try {
      const images = await fetchImages(portfolio)
      setState({ images })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (images.length === 0) load()
  }, [portfolio, images, fetchImages])
  return (
    <div className='portfolio'>
      <div className='columns is-multiline'>
        {images.map(({ file, name, size }) => (
          <div key={file} className='column is-half'>
            <Link to={`/portfolio/${portfolio}/${file.split('.')[0]}`}>
              <Image
                src={`/portfolio/${portfolio}/${file}`}
                alt={name}
                size={size}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
