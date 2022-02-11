import { TMessage } from "../../components/Messages/contract"; 

export const ADD_MESSAGE = 'chats/ADD_MESSAGE';

const persistMessage = (contactId: number, message: TMessage) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            id: contactId,
            message: message
        },
    };
};

export { persistMessage }