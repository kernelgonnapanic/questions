import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoreLayout from './layouts/CoreLayout'
import AllQuestions from './containers/AllQuestions'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={AllQuestions} />
  </Route>
)
