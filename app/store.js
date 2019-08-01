import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import searchReducer from './reducers/serchReducer';

const rootReducer = combineReducers({
  searchBar: searchReducer
});

const configureStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger));
};

export default configureStore;
