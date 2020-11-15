import React from 'react'

export default () => (
  <iframe
    src={`https://www.facebook.com/plugins/like.php?href=${window.location.href}&width=450&layout=standard&action=like&size=large&share=true&height=35&appId=3120586424712806`}
    width='450'
    height='35'
    style={{ border: 'none', overflow: 'hidden' }}
    scrolling='no'
    frameBorder='0'
    allowFullScreen='true'
    allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
  />
)
