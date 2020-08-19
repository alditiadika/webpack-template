import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import propTypes from 'prop-types'

import Spinner from '../components/spinner'

const Loading = () => <Spinner loading={true} />

const dashboard = Loadable({
  loader: () => import('./dashboard'),
  loading: Loading,
})
const defaultPage = Loadable({
  loader: () => import('../components/default-page'),
  loading:Loading
})
const error = Loadable({
  loader: () => import('../components/error/404'),
  loading:Loading
})
const MainRoutesComponent = ({ location }) => {
  if (location.pathname === '/') return <Redirect to='/dashboard' />

  return (
    <Switch>
      <Route path='/route1' component={defaultPage} />
      <Route path='/route2' component={defaultPage} />
      <Route path='/route3' component={defaultPage} />
      <Route path='/route4' component={defaultPage} />
      <Redirect to='/error' />
    </Switch>
  )
}

export { error, dashboard, MainRoutesComponent }
MainRoutesComponent.propTypes = {
  location: propTypes.object,
  modulePermission: propTypes.object
}