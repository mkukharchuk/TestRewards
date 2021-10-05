import React from 'react';
import { colors } from 'src/styles/colors';
import { AvatarIcon } from '../../assets';
import { Icon } from '../Icon';
import { AvatarWrapper } from './Avatar.styled';

interface Props{
    size?: number
}

export const Avatar:React.FC <Props> = ({ size = 24 }) => (
  <AvatarWrapper size={size}>
    <Icon size={size} color={colors.secondary}>
      <AvatarIcon />
    </Icon>
  </AvatarWrapper>
);
