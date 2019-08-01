import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer from './reducers/serchReducer';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  searchBar: searchReducer
});

const configureStore = () => {
  const logger = createLogger();
  return createStore(rootReducer, applyMiddleware(logger));
};

export default configureStore;
