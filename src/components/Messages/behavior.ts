import { useSelector } from "react-redux";
import { TReducers } from "../../store/reducers";
import { TMessage } from "./contract";
import store from "../../store/store";
import { ADD_MESSAGE, TChats } from "./store";

export function useMessageList(contactId: number) {
    const id = useSelector((state: TReducers) => state.page.id);
    
    const messages: Array<TMessage> = [];

    if (!messages.length) {
        const message: TMessage = {
            body: "Oi, gostaria de falar uma coisa contigo!",
            date: new Date()
        }
        messages.push(message);
    }

    console.log(messages);

    const stateMessages = useSelector((state: TReducers) => state.messages);
    // if (!stateMessages.length) {
    //     addMessage(id, "Oi, gostaria de falar uma coisa contigo!");
    // }


    return stateMessages;
}

const persistMessage = (contactId: number, message: TMessage) => {
    const chat: TChats = {
        id: contactId,
        messages: [
            message
        ]
    }
    return {
        type: ADD_MESSAGE,
        payload: chat,
    };
};


export const addMessage = (contactId: number, body: string, date?: Date) => {
    console.info("add message")
    if (!date) {
        date = new Date()
    }
    const message: TMessage = {
        body: body,
        date: new Date()
    }

    store.dispatch(persistMessage(contactId, message));
}
