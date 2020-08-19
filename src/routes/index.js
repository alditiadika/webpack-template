import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'


import { MainRoutesComponent, dashboard } from './routes'
import ExampleNav from '../components/nav'

export const RootOfMainRoutes = ({ location }) => {
  return (
    <Fragment>
      {/* call your utils component (sidebar, navbar, etc) here */}
      <ExampleNav/>
      <div className='main-routes'>
        <Switch>
          <Route path='/dashboard' component={dashboard} />
          <MainRoutesComponent location={location}/>
        </Switch>
      </div>
    </Fragment>
  )
}

RootOfMainRoutes.propTypes = {
  location:propTypes.object
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RootOfMainRoutes)
