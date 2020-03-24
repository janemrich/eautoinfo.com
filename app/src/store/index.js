import { createStore } from 'redux';
import reducer from './reducer';
const { composeWithDevTools } = require('redux-devtools-extension');
const store = createStore(
  reducer
  , composeWithDevTools()
  // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;