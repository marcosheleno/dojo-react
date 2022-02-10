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
    switch (action.type) {
        case ADD_MESSAGE:
            const chatObj = state.chats?.find(chat => chat.id === action.payload.id);
            const chatIndex = state.chats?.findIndex(chat => chat.id === action.payload.id);
            chatObj?.messages.concat(action.payload.messages)

            
            if(chatIndex){
                console.log(state.chats)
            }
            return {
                ...state,
                ...{
                    chats: state.chats?.concat(action.payload)
                }
            };
        default:
            return state;
    }
};

export default reducers;
