import React, { ReactNode } from 'react';
import { FontSizes } from 'src/shared/types';
import { fontSizes } from 'src/styles/fontSizes';
import { StyledText } from './Text.styled';

interface Props {
    size?: FontSizes;
    color?: string;
    weight?: string;
    children: ReactNode;
}

export const Text:React.FC <Props> = ({
  size = 's', color = 'black', weight = 'normal', children,
}) => (
  <StyledText size={fontSizes[size]} color={color} weight={weight}>{children}</StyledText>
);
