import * as React from "react";

export const templateAskQuestion = ({ name, email, question }) => {
  return (
    <div>
      <h2>You just received a new message!</h2>
      <p>
        <span>Name:</span>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Email:</span>
        <strong>{email}</strong>
      </p>
      <p>
        <span>Question:</span>
        <strong>{question}</strong>
      </p>
    </div>
  );
};