import { TMessage } from "./contract";

export const fetchMessageList = (contactId: number) => {
    //TODO: query for messages
    const messages: Array<TMessage> = [];

    if (!messages.length) {
        const message: TMessage = {
            body: "Oi, gostaria de falar uma coisa contigo!",
            date: new Date()
        }
        messages.push(message);
    }

    return messages;
}