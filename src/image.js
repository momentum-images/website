import React from 'react'
import PropTypes from 'prop-types'

import { LazyImage } from 'react-lazy-images'
import Loading from './loading'

const Placeholder = ({ ref }) => <div ref={ref} className='image is-1by1 placeholder'><Loading /></div>

Placeholder.propTypes = {
  ref: PropTypes.any.isRequired
}

const Image = ({ src, alt, orientation }) => (
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
}

export default Image
