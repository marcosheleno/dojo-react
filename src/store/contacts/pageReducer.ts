import { UPDATE_PAGE } from './pageActions';

export interface IInitalState {
  id?: number;
}

const INITIAL_STATE: IInitalState = {
  id: undefined,
};

export interface TAction {
  type: string;
  payload: number;
}

const reducers = (state: IInitalState = INITIAL_STATE, action: TAction) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;