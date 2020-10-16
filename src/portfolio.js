import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import csv from 'csvtojson'
import { LazyImage } from 'react-lazy-images'
import Loading from './loading'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const Placeholder = ({ ref }) => <div ref={ref} className='portfolio-image placeholder'><Loading /></div>

const Image = ({ src, alt }) => (
  <LazyImage
    className='portfolio-image'
    src={src}
    alt={alt}
    debounceDurationMs={400}
    placeholder={Placeholder}
    actual={({ imageProps }) => (
      <img {...imageProps} className='portfolio-image is-loaded' style={{ width: '100%' }} />
    )}
  />
)

export default () => {
  const { portfolio } = useParams()
  const [state, setState] = useState({ images: [] })
  const { images } = state

  const fetchImages = async () => {
    const res = await fetch(`/portfolio/${portfolio}/images.csv`)
    const data = await res.text()
    const images = await csv().fromString(data)
    setState({ images })
  }

  useEffect(() => {
    if (images.length === 0) fetchImages()
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
