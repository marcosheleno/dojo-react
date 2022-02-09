import React from "react";

const MessagesList = ({ messages }: { messages?: String[] }) => {
  if (!messages) {
    messages = [];
    messages.push("Oi, gostaria de falar uma coisa contigo!");
  }

  return (
    <>
      {messages.map((message) => {
        return (
          <div>
            <p>{message}</p>
          </div>
        );
      })}
    </>
  );
};

export default MessagesList;
