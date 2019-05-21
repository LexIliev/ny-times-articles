import {
  FETCH_ARTICLES_LIST,
  FETCH_ARTICLES_LIST_SUCCESS,
  FETCH_ARTICLES_LIST_FAIL,
} from '../../actions/actionTypes';

import {
  fetchArticlesList,
  fetchArticlesListSuccess,
  fetchArticlesListFail,
} from '../../actions';

describe('Test Article list actions', () => {
  test('should fetchArticlesList be a function', () => {
    expect(fetchArticlesList).toBeInstanceOf(Function);
  });
  test('should fetchArticlesListSuccess be a function', () => {
    expect(fetchArticlesListSuccess).toBeInstanceOf(Function);
  });
  test('should fetchArticlesListFail be a function', () => {
    expect(fetchArticlesListFail).toBeInstanceOf(Function);
  });

  test('should fetchArticlesList have the correct type', () => {
    const action = fetchArticlesList();
    expect(action.type).toBe(FETCH_ARTICLES_LIST);
  });
  test('should fetchArticlesListSuccess have the correct type and payload', () => {
    const mockedData = ['a', 'b', 'c'];
    const action = fetchArticlesListSuccess(mockedData);
    expect(action.type).toBe(FETCH_ARTICLES_LIST_SUCCESS);
    expect(action.data).toBe(mockedData);
  });
  test('should fetchArticlesListFail have the correct type and payload', () => {
    const mockedError = 'An error has occured';
    const action = fetchArticlesListFail(mockedError);
    expect(action.error).toBe(mockedError);
  });
});
