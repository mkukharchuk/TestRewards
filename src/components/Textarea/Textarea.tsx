import React, { TextareaHTMLAttributes } from 'react';
import { StyledTextarea, StyledLabel, Wrapper } from './Textarea.styled';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    name: string;
}

export const Textarea:React.FC <Props> = ({ label = '', name = '', ...rest }) => (
  <Wrapper>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledTextarea name={name} {...rest} />
  </Wrapper>
);
