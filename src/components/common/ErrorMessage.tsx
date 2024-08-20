import React, { FC } from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => <p>{message}</p>;

export default ErrorMessage;
