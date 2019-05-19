import {
  FETCH_ARTICLES_LIST,
  FETCH_ARTICLES_LIST_SUCCESS,
  FETCH_ARTICLES_LIST_FAIL,
} from './actionTypes';

export const fetchArticlesList = () => ({
  type: FETCH_ARTICLES_LIST,
});

export const fetchArticlesListSuccess = (data) => ({
  type: FETCH_ARTICLES_LIST_SUCCESS,
  data,
});

export const fetchArticlesListFail = (error) => ({
  type: FETCH_ARTICLES_LIST_FAIL,
  error,
});
