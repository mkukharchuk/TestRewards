import React from 'react';
import { colors } from 'src/styles/colors';
import { Text } from '../Text';
import {
  Wrapper, Tab, TabsContainer,
} from './TabNav.styled';

export const TabNav = ({ content, onTabChange, activeTab }) => (
  <Wrapper>
    <TabsContainer>
      {content.map(({
        tabName,
      }, i) => (
        <Tab key={tabName} active={activeTab === i} onClick={() => onTabChange(i)}>
          <Text size="s" color={colors.purple} weight="bold">{tabName}</Text>
        </Tab>
      ))}
    </TabsContainer>
  </Wrapper>
);
