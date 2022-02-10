import { TMessage } from "../contract";
export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface IInitalState {
    chats?: TChats[]
}
export interface TChats {
    id: number
    messages: TMessage[]
}

const INITIAL_STATE: IInitalState = {
    chats: [

    ],
};

export interface TAction {
    type: string;
    payload: TChats;
}

export interface TPageState {
    id: number;
}

const reducers = (state: IInitalState = INITIAL_STATE, action: TAction) => {
    console.log("ADD_MESSAGE" === action.type)
    switch (action.type) {
        case ADD_MESSAGE:
            console.info("Enter ADD_MESSAGE", state)

            return { ...state, chats: state.chats?.concat(action.payload) };
        default:
            return state;
    }
};

export default reducers;
