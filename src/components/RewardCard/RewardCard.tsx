import React, { useMemo } from 'react';
import { RewardItem } from 'src/containers/RewardsFeature/rewardsSlice';
import { transformDate } from 'src/utils/transformDate';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { Wrapper, RewardInfoBlock, RewardInfoBlockHeading } from './RewardCard.styled';

export const RewardCard:React.FC <RewardItem> = ({
  message = 'Lorem Ipsum', date = 'Fri, 02 Feb 2021 03:04:05 GMT', rewarder = 'David Granie', rewardie = 'Jhon Chen',
}) => {
  const transformedDate = useMemo(() => transformDate(date), [date]);
  const rewardTitle = `${rewardie} rewarded by ${rewarder}`;

  return (
    <Wrapper>
      <Avatar />
      <RewardInfoBlock>
        <RewardInfoBlockHeading>
          <Text size="s">{rewardTitle}</Text>
          <Text size="xs">{transformedDate}</Text>
        </RewardInfoBlockHeading>

        <Text size="m">{message}</Text>
      </RewardInfoBlock>
    </Wrapper>
  );
};
