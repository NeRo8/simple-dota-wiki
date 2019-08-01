import { SEARCH_HERO_BY_NAME, CLEAR_SEARCH_BAR } from './types';

export function searchHeroByName(heroname) {
  return {
    type: SEARCH_HERO_BY_NAME,
    payload: heroname
  };
}

export function clearSearchBar() {
  return {
    type: CLEAR_SEARCH_BAR
  };
}
