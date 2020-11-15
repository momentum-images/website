import 'bulma/css/bulma.css'
import './index.css'
import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './app'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
// import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
