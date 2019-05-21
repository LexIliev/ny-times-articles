import {
  fetchArticlesList,
  fetchArticlesListSuccess,
  fetchArticlesListFail,
} from '../../actions';

import articleReducer from '../../reducers/articleReducer';

describe('Article reducer', () => {
  const mockedState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: '',
  };
  test('should properly update when fetchArticlesListSuccess is called', () => {
    const mockedArray = ['a', 'b', 'c'];
    expect(
      articleReducer(mockedState, fetchArticlesListSuccess(mockedArray)),
    ).toEqual({
      ...mockedState,
      data: mockedArray,
    });
  });
  test('should properly update when fetchArticlesList is called', () => {
    expect(articleReducer(mockedState, fetchArticlesList())).toEqual({
      ...mockedState,
      isFetching: true,
    });
  });
  test('should properly update when fetchArticlesListFail is called', () => {
    const mockedError = 'An error has occured';
    expect(
      articleReducer(mockedState, fetchArticlesListFail(mockedError)),
    ).toEqual({
      ...mockedState,
      hasError: true,
      errorMessage: mockedError,
    });
  });
});
