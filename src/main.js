import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Loading from './loading'

const Home = lazy(() => import('./home'))
const Portfolio = lazy(() => import('./portfolio'))
const Contact = lazy(() => import('./contact'))
const About = lazy(() => import('./about'))
const Tcs = lazy(() => import('./tcs'))
const Thanks = lazy(() => import('./thanks'))
const NotFound = lazy(() => import('./not-found'))

export default () => (
  <main>
    <section className='section'>
      <div className='container'>
        <Suspense fallback={<div className='lazy-container'><Loading /></div>}>
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
        </Suspense>
      </div>
    </section>
  </main>
)
