import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);
let router = applyMiddleware(routerMiddleware(history));

const composeEnhancers = compose;
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(preloadedState) {
  const store = createStore(
    // Root reducer with Router state
    rootReducer(history),
    preloadedState,
    composeEnhancers(middleware, router, reduxDevTools)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
