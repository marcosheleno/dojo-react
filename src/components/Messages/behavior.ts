import { useSelector } from "react-redux";
import { TReducers } from "../../store/reducers";
import { TMessage } from "./contract";
import store from "../../store/store";
import { TChat } from "../../store/chats/chatsReducer";
import { persistMessage } from "../../store/chats/chatsActions";

export function useMessageList(contactId: number) {
    const chats = useSelector((state: TReducers) => state.chats);
    const foundChats = chats.chats.filter((chat: TChat, key: number) => {
        return chat.id === contactId;
    })
    const foundChat = foundChats.shift();

    if (!foundChat) {
        addMessage(contactId, 'Oi, gostaria de falar uma coisa contigo!');
        return [];
    }

    return foundChat.messages;
}


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
