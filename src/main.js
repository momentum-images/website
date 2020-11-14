import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './home'
import Portfolio from './portfolio'
import Contact from './contact'
import About from './about'
import Tcs from './tcs'
import Thanks from './thanks'
import NotFound from './not-found'

export default () => (
  <main>
    <section className='section'>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/portfolio/:portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/portfolio'>
            <Redirect to='/' />
          </Route>
          <Route exact path='/tcs'>
            <Tcs />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/thanks'>
            <Thanks />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </section>
  </main>
)
