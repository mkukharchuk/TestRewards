import React, { useState } from 'react';
import { PlusIcon } from 'src/assets';
import { Icon, RewardCard, TabNav } from 'src/components';
import { colors } from 'src/styles/colors';
import { RewardModal } from './RewardModal';

import { Wrapper, RewardAddButton } from './RewardsSection.styled';

const tabContent = [
  {
    tabName: 'Feed',
  },
  {
    tabName: 'My Rewards',
  },
];

export const RewardsSection = ({ rewards, myRewards }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const toggle = () => setModalVisible(!isModalVisible);
  return (
    <>
      <TabNav content={tabContent} activeTab={activeTab} onTabChange={setActiveTab} />
      <Wrapper>
        <RewardAddButton type="button" onClick={() => toggle()}>
          <Icon size={20} color={colors.black}><PlusIcon /></Icon>
        </RewardAddButton>
        <RewardModal show={isModalVisible} close={toggle} />
        {activeTab === 0
          ? rewards.map((reward) => <RewardCard {...reward} />)
          : myRewards.map((reward) => <RewardCard {...reward} />)}
      </Wrapper>
    </>
  );
};
