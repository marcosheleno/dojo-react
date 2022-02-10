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
            console.log(state);


            if (!state.hasOwnProperty('chats')) {
                state.chats = [];
            }

            //criar indice no state
            if (!state.chats[action.payload.id]) {
                state.chats[action.payload.id] = action.payload;

                return state;
            }
            //concatenar



            state.chats.map((chat, index) => {
                if (index !== action.payload.id) {
                    return chat;
                }

                chat.messages.concat(action.payload.messages);

                return chat;
            })

            // state.chats[action.payload.id].messages.concat(action.payload.messages);

            return state;
        default:
            return state;
    }
};

export default reducers;
