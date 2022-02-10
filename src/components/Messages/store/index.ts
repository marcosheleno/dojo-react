import { TMessage } from "../contract";
export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface IInitalState {
    chats: TChats[]
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

            if (!state) {
                state = INITIAL_STATE
            }

            const chatNew = state.chats.filter((chat: TChats, key: number) => {
                return chat.id == action.payload.id
            });

            let chatNew2 = chatNew.shift();

            if (!chatNew2) {
                return { ...state, chats: state.chats?.concat(action.payload) };
            }

            console.info(chatNew2);
            const message = action.payload.messages.shift();
            console.info(message);

            return { ...state, chats: state.chats?.concat(action.payload) };

            return {
                ...state,
                chats: state.chats?.concat(action.payload)
            };
        default:
            return state;
    }
};

export default reducers;
