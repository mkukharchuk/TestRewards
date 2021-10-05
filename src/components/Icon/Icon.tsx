import React, { ReactNode } from 'react';
import { StyledIcon } from './Icon.styled';

interface Props {
    children: ReactNode;
    size?: number;
    color?: string;
}

export const Icon:React.FC <Props> = ({ children, size = 24, color = '#fff' }) => (
  <StyledIcon size={size} color={color}>
    {children}
  </StyledIcon>
);
