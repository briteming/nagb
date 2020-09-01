import {
  SAVE_TIMELINE,
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_FAIL,
  FETCH_TIMELINE,
} from '../../../constants/ActionTypes'

const initialState = {
  currentList: [],
  currentPage: 1,
}

const timeline = (prevState = initialState, { type, payload: nextState }) => {
  switch (type) {
    case FETCH_TIMELINE_SUCCESS:
    case SAVE_TIMELINE:
      return {
        ...prevState,
        ...nextState,
      }
    case FETCH_TIMELINE:
    case FETCH_TIMELINE_FAIL:
    default:
      return prevState
  }
}

export default timeline
