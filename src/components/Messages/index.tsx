import React from "react";
import { TMessage } from "./contract";
import Message from "./Message";


const MessagesList = ({ messages }: { messages?: TMessage[] }) => {
  if (!messages) {
    messages = [];
    const message = {
        body: "Oi, gostaria de falar uma coisa contigo!",
        date: new Date()
    }
    messages.push(message);
  }

  return (
    <>
      {messages.map((message) => {
        return (
          <Message message={message}></Message>
        );
      })}
    </>
  );
};

export default MessagesList;
