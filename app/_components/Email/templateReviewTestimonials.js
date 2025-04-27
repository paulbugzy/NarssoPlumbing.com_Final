import * as React from "react";

export const templateReviewTestimonials = ({ name, phone, email, rated, review }) => {
  return (
    <div>
      <h2>You just received a new message!</h2>
      <p>
        <span>Name:</span>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Phone:</span>
        <strong>{phone}</strong>
      </p>
      <p>
        <span>Email:</span>
        <strong>{email}</strong>
      </p>
      <p>
        <span>Rated:</span>
        <strong>{rated}</strong>
      </p>
      <p>
        <span>Review:</span>
        <strong>{review}</strong>
      </p>
    </div>
  );
};