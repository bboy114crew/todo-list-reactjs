import SearchActionTypes from '../search/search.types';

const INITIAL_STATE = {
  keyword: ""
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_KEY: 
      return {
        ...state,
        keyword: action.payload
      }
    default:
      return state;
  }
};

export default searchReducer;