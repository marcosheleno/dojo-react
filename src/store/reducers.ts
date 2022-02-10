import { combineReducers } from 'redux';
import { pageReducer } from './contacts';
import { TPageState } from './contacts/pageReducer';
import { default as messageReducer, IInitalState } from '../components/Messages/store'

export type TReducers = {
  page: TPageState,
  messages: IInitalState
};

const reducers = combineReducers({
  page: pageReducer,
  messages: messageReducer
});

export type RootState = ReturnType<typeof reducers>

export default reducers;
