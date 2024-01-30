import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './project/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// Logger used to log redux events coming in console.
// https://www.npmjs.com/package/redux-logger#usage

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
