import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as dashboardReducer } from './dashboard'
import { reducer as homeReducer } from './home'

const reducer = combineReducers({
  dashboard: dashboardReducer,
  home: homeReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducer, composeEnhancers (
  applyMiddleware (thunk)
));

export default store;