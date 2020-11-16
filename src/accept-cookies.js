import React, { useState } from 'react'
import cookies from 'js-cookie'

export default () => {
  const [clicked, setClicked] = useState(false)

  const reject = () => {
    if (!document.__defineGetter__) {
      Object.defineProperty(document, 'cookie', {
        get: function () { return '' },
        set: function () { return true }
      })
    } else {
      document.__defineGetter__('cookie', function () { return '' })
      document.__defineSetter__('cookie', function () {})
    }
    window.rejected = true
    setClicked(true)
  }

  const accept = () => {
    cookies.set('accept', true)
    setClicked(true)
  }

  let show = !clicked
  if (window.rejected) show = false
  else if (cookies.getJSON().accept) show = false

  return show
    ? (
      <div className='accept-cookies'>
        <div className='level'>
          <div className='level-item'>
            <p className='is-lato'>This website uses cookies to enhance the user experience.</p>
          </div>
          <div className='level-item'>
            <div className='buttons'>
              <button
                className='button is-danger is-oswald'
                onClick={reject}
              >
                Reject
              </button>
              <button
                className='button is-warning is-oswald'
                onClick={accept}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    : null
}
