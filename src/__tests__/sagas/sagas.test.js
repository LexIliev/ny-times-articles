import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { takeLatest, call } from 'redux-saga/effects';
import reducer, { initialState } from '../../reducers/articleReducer';
import { fetchArticlesList } from '../../api';
import rootSaga, { getArticlesList } from '../../sagas';
import * as actions from '../../actions';
import articlesResponse from '../../__mocks__/articlesList.json';
import { throwError } from 'redux-saga-test-plan/providers';
import { FETCH_ARTICLES_LIST } from '../../actions/actionTypes';

describe('Article Sagas', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getArticlesList', () => {
    return (
      expectSaga(getArticlesList, {})
        .withReducer(reducer)
        .provide([[call(fetchArticlesList), articlesResponse]])
        .put(actions.fetchArticlesListSuccess(articlesResponse.results))

        // Start the test. Returns a Promise.
        .silentRun()
    );
  });

  test('getArticlesList Error', () => {
    const error = new Error('error');
    return (
      expectSaga(getArticlesList, {})
        .withReducer(reducer)
        .provide([[call(fetchArticlesList), throwError(error)]])
        .put(actions.fetchArticlesListFail(error))

        // Start the test. Returns a Promise.
        .silentRun()
    );
  });

  test('articlesList watcher saga', () => {
    testSaga(rootSaga)
      .next()
      .takeLatest(FETCH_ARTICLES_LIST, getArticlesList)
      .finish()
      .isDone();
  });
});
