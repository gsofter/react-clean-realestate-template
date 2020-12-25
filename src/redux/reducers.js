import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user/reducers'

export default function reducers(history) {
  return combineReducers({
    router: connectRouter(history),
    user,
  })
}
