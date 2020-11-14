import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchImages from './fetch-images'
import Image from './image'

export default () => {
  const { portfolio } = useParams()
  const [state, setState] = useState({ images: [] })
  const { images } = state

  useEffect(() => {
    const load = async () => {
      const images = await fetchImages(portfolio)
      setState({ images })
    }
    if (images.length === 0) load()
  }, [portfolio, images])
  return (
    <div className='portfolio'>
      <div className='columns is-multiline'>
        {images.map(({ file, name, orientation, size }, index) => {
          return (
            <div key={file} className={`column is-${size}`}>
              <Image
                src={`/portfolio/${portfolio}/${file}`}
                alt={name}
                orientation={orientation}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
