import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
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

export default function configureStore(preloadedState) {
  const store = createStore(
    // Root reducer with Router state
    rootReducer(history),
    preloadedState,
    composeEnhancers(middleware, router),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
