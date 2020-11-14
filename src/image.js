import React from 'react'

import { LazyImage } from 'react-lazy-images'
import Loading from './loading'

const Placeholder = ({ ref }) => <div ref={ref} className='image is-1by1 placeholder'><Loading /></div>

export default ({ src, alt, orientation }) => (
  <LazyImage
    className={`image is-${orientation === 'portrait' ? '4by5' : '16by9'}`}
    src={src}
    alt={alt}
    debounceDurationMs={400}
    placeholder={Placeholder}
    actual={({ imageProps }) => (
      <img alt='Placeholder description' {...imageProps} className={`image is-${orientation === 'portrait' ? '4by5' : '16by9'} is-loaded`} />
    )}
  />
)
