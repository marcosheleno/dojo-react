import { ATUALIZAR_TOTAL } from './totalActions';


const INITIAL_STATE: IInitalState = {
  totals: null,
};

export interface IInitalState {
  totals: number;
}

export interface TAction {
  type: string;
  payload: number;
}

export interface TTotalState {
  totals: number;
}

export default (state: IInitalState = INITIAL_STATE, action: TAction) => {
  switch (action.type) {
    case ATUALIZAR_TOTAL:
      return {
        ...state,
        totals: action.payload,
      };
    default:
      return state;
  }
};