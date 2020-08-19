import React, { Fragment, Component } from 'react'
import propTypes from 'prop-types'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ErrorBoundary from './components/error/error-boundary'
import MainApp from './routes'

const RootRoute = ({ match }) => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Switch>
          {/* for url root redirect like /login /error etc. define here */}
          <Route path={`${match.url}`} component={MainApp} />
        </Switch>
      </ErrorBoundary>
    </Fragment>
  )
}
class App extends Component {
  UNSAFE_componentWillMount() {
    // this action is executed after /src/index.js
    // for login authenticator, define your action here
  }
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Switch>
            <Route path='/' component={RootRoute} />
          </Switch>
        </HashRouter>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

RootRoute.propTypes = {
  match: propTypes.object
}
App.propTypes = {
  checkAuthentication: propTypes.func
}