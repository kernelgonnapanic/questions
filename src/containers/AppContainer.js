import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createHistory, useBasename } from 'history'

const browserHistory = useBasename(createHistory)({
  basename: '/questions'
})

class AppContainer extends Component {
  static propTypes = {
    store  : PropTypes.object.isRequired,
    routes : PropTypes.object.isRequired
  }

  render () {
    const { store, routes } = this.props
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          { routes }
        </Router>
      </Provider>
    )
  }
}

export default AppContainer
