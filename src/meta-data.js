import React from 'react'
import { Helmet } from 'react-helmet'

const host = 'https://momentumimages.co.uk'

export default ({ title, description, path, image }) => (
  <Helmet>
    <title>title</title>
    <meta name='title' content={title} />
    <meta name='og:title' content={title} />
    <meta name='description' content={description} />
    <meta name='og:description' content={description} />
    <meta name='og:url' content={`${host}${path}`} />

    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={description} />

    <meta property='og:type' content='website' />
    <meta property='og:url' content={`${host}${path}`} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={`${host}${image}`} />

    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={`${host}${path}`} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={description} />
    <meta property='twitter:image' content={`${host}${image}`} />
  </Helmet>
)
