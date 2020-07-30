import {
  FETCH_POST_LIST,
  FETCH_POST_LIST_FAIL,
  FETCH_POST_LIST_SUCCESS,
} from '../../../constants/ActionTypes';

const initialState = {
  list: [],
  detail: {},
};

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POST_LIST:
    case FETCH_POST_LIST_FAIL:
      return initialState;
    case FETCH_POST_LIST_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default list;
