import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App'
import Supportus from '../components/Supportus'
import Volunteer from '../components/Volunteer'
import Location from '../components/Location'
import Bookstore from '../components/Bookstore'
import Home from '../components/Home'
import About from '../components/About'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='supportus' component={Supportus} />
    <Route path='volunteer' component={Volunteer} />
    <Route path='location' component={Location} />
    <Route path='bookstore' component={Bookstore} />
  </Route>
)

module.exports = routes