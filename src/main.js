import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './home'
import Portfolio from './portfolio'
import Contact from './contact'

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
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </section>
  </main>
)
