import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
