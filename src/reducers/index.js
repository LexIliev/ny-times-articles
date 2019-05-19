import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import articleReducer from './articleReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    articles: articleReducer,
  });
