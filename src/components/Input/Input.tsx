import React, { InputHTMLAttributes } from 'react';
import { StyledInput, StyledLabel, Wrapper } from './Input.styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
}

export const Input:React.FC <Props> = ({ label = '', name = '', ...rest }) => (
  <Wrapper>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput name={name} {...rest} />
  </Wrapper>
);
