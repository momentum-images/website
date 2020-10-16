import React from 'react'

import { LazyImage } from 'react-lazy-images'
import Loading from './loading'

const Placeholder = ({ ref }) => <div ref={ref} className='image placeholder'><Loading /></div>

export default ({ src, alt }) => (
  <LazyImage
    className='image'
    src={src}
    alt={alt}
    debounceDurationMs={400}
    placeholder={Placeholder}
    actual={({ imageProps }) => (
      <img {...imageProps} className='image is-loaded' />
    )}
  />
)
