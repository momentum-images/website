import React from 'react'

import { LazyImage } from 'react-lazy-images'
import Loading from './loading'

const Placeholder = ({ ref }) => <div ref={ref} className='image is-1by1 placeholder'><Loading /></div>

const toSentence = (text) => {
  text = text.replace(/\W/g, ' ').replace(/ min$/g, '')
  return `${text[0].toUpperCase()}${text.slice(1)}`
}

const Image = ({ src, alt, orientation = null, lazy = true }) => {
  if (!src.startsWith('/')) src = `/${src}`
  let className = 'image'
  if (orientation) className = `image is-${orientation === 'portrait' ? '4by5' : '16by9'}`
  if (lazy) {
    return (
      <LazyImage
        className={className}
        src={`/images${src}.jpg`}
        alt={alt}
        debounceDurationMs={200}
        placeholder={Placeholder}
        actual={({ imageProps }) => (
          <picture>
            <source srcSet={`/images${src}.webp`} type='image/webp' />
            <source srcSet={`/images${src}.jpg`} type='image/jpeg' />
            <img
              alt={toSentence(alt)}
              className={`${className} is-loaded`}
              src={`/images${src}.jpg`}
            />
          </picture>
        )}
      />
    )
  } else {
    return (
      <picture>
        <source srcSet={`/images${src}.webp`} type='image/webp' />
        <source srcSet={`/images${src}.jpg`} type='image/jpeg' />
        <img
          alt={toSentence(alt)}
          className={`${className} is-loaded`}
          src={`/images${src}.jpg`}
        />
      </picture>
    )
  }
}

export default Image
