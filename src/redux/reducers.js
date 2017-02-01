import { combineReducers } from 'redux'
import locationReducer from './modules/location'
import { uiReducer } from './modules/ui'
import { usersReducer } from './modules/users'
import { questionsReducer } from './modules/questions'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    ui: uiReducer,
    users: usersReducer,
    questions: questionsReducer
  })
}

export default makeRootReducer
