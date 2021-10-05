import React from 'react';
import { Avatar, Text } from 'src/components';
import {
  Wrapper, AvatarContainer, RewardContainer, RewardBlock,
} from './ProfileSection.styled';

export const ProfileSection = () => (
  <Wrapper>
    <AvatarContainer>
      <Avatar size={40} />
      <Text size="s">John Doe</Text>
    </AvatarContainer>
    <RewardContainer>
      <RewardBlock>
        <Text size="s">My Rewards</Text>
        <Text size="xl">$100</Text>
      </RewardBlock>
      <RewardBlock>
        <Text size="s">Give</Text>
        <Text size="xl">$200</Text>
      </RewardBlock>
    </RewardContainer>
  </Wrapper>
);
