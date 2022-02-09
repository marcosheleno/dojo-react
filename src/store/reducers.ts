import { combineReducers } from 'redux';
import { pageReducer } from './contacts';
import { TPageState } from './contacts/pageReducer';

export type TReducers = {
  id: TPageState;
};

const reducers = combineReducers({
  page: pageReducer,
});

export default reducers;