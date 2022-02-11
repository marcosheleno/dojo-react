import { combineReducers } from 'redux';
import { pageReducer } from './contacts';
import { TPageState } from './contacts/pageReducer';
import { chatsReducer } from './chats';
import { IInitalState } from './chats/chatsReducer';

export type TReducers = {
  page: TPageState,
  chats: IInitalState
};

const reducers = combineReducers({
  page: pageReducer,
  chats: chatsReducer
});

export type RootState = ReturnType<typeof reducers>

export default reducers;
