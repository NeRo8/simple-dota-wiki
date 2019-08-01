import { CLEAR_SEARCH_BAR, SEARCH_HERO_BY_NAME } from '../actions/types';

const initialState = {
  searchBar: ''
};

function searchReducer(state = initialState, actions) {
  switch (actions.type) {
    case SEARCH_HERO_BY_NAME: {
      return {
        ...state,
        searchBar: actions.payload
      };
    }
    case CLEAR_SEARCH_BAR: {
      return {
        ...state,
        searchBar: ''
      };
    }
    default:
      return state;
  }
}

export default searchReducer;
