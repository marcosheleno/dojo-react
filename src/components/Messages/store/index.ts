import { TMessage } from "../contract";
export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface IInitalState {
    chats: TChat[]
}
export interface TChat {
    id: number
    messages: TMessage[]
}

const INITIAL_STATE: IInitalState = {
    chats: [

    ],
};

export interface TAction {
    type: string;
    payload: {
        id: number,
        message: TMessage
    }
}

const reducers = (state: IInitalState = INITIAL_STATE, action: TAction) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.chats.length) {
                state.chats.push({
                    id: action.payload.id,
                    messages: [
                        action.payload.message
                    ]
                });
                return state;
            }

            const foundChats = state.chats.filter((chat: TChat, key: number) => {
                return chat.id == action.payload.id
            });
            const foundChat = foundChats.shift();
            if (!foundChat) {
                state.chats.push({
                    id: action.payload.id,
                    messages: [
                        action.payload.message
                    ]
                });
                return state;
            }
            foundChat.messages.push(action.payload.message);

            return {
                ...state,
                state
            };
        default:
            return state;
    }
};

export default reducers;
