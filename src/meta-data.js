import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ title, description, path, image }) => (
  <Helmet>
    <title>title</title>
    <meta name='title' content={title} />
    <meta name='og:title' content={title} />
    <meta name='description' content={description} />
    <meta name='og:description' content={description} />
    <meta name='og:url' content={`https://momentumimages.co.uk/${path}`} />

    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={description} />

    <meta property='og:type' content='website' />
    <meta property='og:url' content={`https://momentumimages.co.uk/${path}`} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image} />

    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={`https://momentumimages.co.uk/${path}`} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={description} />
    <meta property='twitter:image' content={image} />
  </Helmet>
)
