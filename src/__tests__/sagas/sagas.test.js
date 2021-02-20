import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import * as actions from '../../actions';
import { FETCH_ARTICLES_LIST } from '../../actions/actionTypes';
import { fetchArticlesList } from '../../api';
import reducer from '../../reducers/articleReducer';
import rootSaga, { getArticlesList } from '../../sagas';
import articlesResponse from '../../__mocks__/articlesList.json';

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
