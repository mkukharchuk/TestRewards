import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string;
}

export const Button:React.FC <Props> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);
