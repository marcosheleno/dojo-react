import React from "react";
import { TMessage } from "./contract";
import Message from "./Message";


const MessagesList = ({ messages }: { messages: TMessage[] }) => {

  return (
    <>
      {messages.map((message, index) => {
        return (
          <Message message={message} key={index}></Message>
        );
      })}
    </>
  );
};

export default MessagesList;
