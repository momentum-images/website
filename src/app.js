import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import Main from './main'
import Footer from './footer'

export default () => (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
)
