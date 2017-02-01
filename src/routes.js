import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoreLayout from './layouts/CoreLayout'
import AllQuestions from './containers/AllQuestions'
import MyShelf from './containers/MyShelf'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={AllQuestions} />
    <Route path='myshelf' component={MyShelf} />
  </Route>
)
