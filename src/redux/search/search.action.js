import SearchActionTypes from '../search/search.types';

export const setSearchKey = key => ({
  type: SearchActionTypes.SET_SEARCH_KEY,
  payload: key
});