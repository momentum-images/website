import React from 'react'

import { LazyImage } from 'react-lazy-images'
import Loading from './loading'

const Placeholder = ({ ref }) => <div ref={ref} className='image is-1by1 placeholder'><Loading /></div>

export default ({ src, alt, size = 'portrait' }) => (
  <LazyImage
    className={`image is-${size === 'portrait' ? '4by5' : '1by1'}`}
    src={src}
    alt={alt}
    debounceDurationMs={400}
    placeholder={Placeholder}
    actual={({ imageProps }) => (
      <img {...imageProps} className={`image is-${size === 'portrait' ? '4by5' : '1by1'} is-loaded`} />
    )}
  />
)
