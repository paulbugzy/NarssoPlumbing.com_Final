import * as React from "react";

export const templateAskQuestion = ({ name, email, phone, address, services, message, meeting_time }) => {
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
        <span>Phone:</span>
        <strong>{phone}</strong>
      </p>
      <p>
        <span>Address:</span>
        <strong>{address}</strong>
      </p>
      <p>
        <span>Services:</span>
        <strong>{services}</strong>
      </p>
      <p>
        <span>Meeting_time:</span>
        <strong>{meeting_time}</strong>
      </p>
      <p>
        <span>Message:</span>
        <strong>{message}</strong>
      </p>
    </div>
  );
};