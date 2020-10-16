import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Carousel from './carousel'
import Home from './home'
import Portfolio from './portfolio'

export default () => (
  <main>
    <section className='section'>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/portfolio/:portfolio/:file'>
            <Carousel />
          </Route>
          <Route exact path='/portfolio/:portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/portfolio'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </section>
  </main>
)
