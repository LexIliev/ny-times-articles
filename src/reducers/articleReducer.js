import {
  FETCH_ARTICLES_LIST,
  FETCH_ARTICLES_LIST_SUCCESS,
  FETCH_ARTICLES_LIST_FAIL,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_LIST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ARTICLES_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCH_ARTICLES_LIST_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}
