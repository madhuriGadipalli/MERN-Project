import React from "react";
import Alert from "react-bootstrap/Alert";

type props = {
  variant: string;
  message: string;
};

export const InfoMessage = ({ variant, message }: props) => {
  console.log("message", message);
  return (
    <Alert key={variant} variant={variant}>
      {message}
    </Alert>
  );
};
