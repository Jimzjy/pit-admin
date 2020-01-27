import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as dashboardReducer } from './dashboard'

const reducer = combineReducers({
  dashboard: dashboardReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducer, composeEnhancers (
  applyMiddleware (thunk)
));

export default store;