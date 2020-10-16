import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import Main from './main'

export default () => (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
)
