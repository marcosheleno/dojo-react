import { combineReducers } from 'redux';
import { pageReducer } from './contacts';
import { TPageState } from './contacts/pageReducer';

export type TReducers = {
  page: TPageState;
};

const reducers = combineReducers({
  page: pageReducer,
});

export type RootState = ReturnType<typeof reducers>

export default reducers;