import { useSelector } from "react-redux";
import { TReducers } from "../../store/reducers";
import { TMessage } from "./contract";
import store from "../../store/store";
import { ADD_MESSAGE, TChat } from "./store";

export function useMessageList(contactId: number) {
    const chats = useSelector((state: TReducers) => state.messages);
    const foundChats = chats.chats.filter((chat: TChat, key: number) => {
        return chat.id == contactId;
    })
    const foundChat = foundChats.shift();

    if (!foundChat) {
        addMessage(contactId, 'oi');
        //corrigir
        return [];
    }


    return foundChat.messages;
}

const persistMessage = (contactId: number, message: TMessage) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            id: contactId,
            message: message
        },
    };
};


export const addMessage = (contactId: number, body: string, date?: Date) => {
    if (!date) {
        date = new Date()
    }
    const message: TMessage = {
        body: body,
        date: new Date()
    }

    store.dispatch(persistMessage(contactId, message));
}
