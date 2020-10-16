import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './header'
import Main from './main'
import Footer from './footer'
import Carousel from './carousel'

export default () => (
  <Router>
    <Route exact path='/portfolio/:portfolio/:file'>
      <Carousel />
    </Route>
    <Header />
    <Main />
    <Footer />
  </Router>
)
