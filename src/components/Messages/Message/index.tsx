import React from "react";
import {TMessage} from "../contract";

const Message = ({ message }: { message: TMessage }) => {  
  return (
    <div>
      <p>{message.body}</p>
      <small>{message.date?.toDateString()}</small>
    </div>
  );
};


export default Message;
