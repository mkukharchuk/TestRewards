import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { ProfileSection } from './ProfileSection';
import { Wrapper } from './RewardsFeature.styled';
import { RewardsSection } from './RewardsSection';
import {
  fetchRewards, selectRewards, selectRewardsStatus, selectMyRewards,
} from './rewardsSlice';

export const RewardsFeature = () => {
  const dispatch = useAppDispatch();
  const rewards = useAppSelector(selectRewards);
  const myRewards = useAppSelector(selectMyRewards);
  const rewardsStatus = useAppSelector(selectRewardsStatus);

  useEffect(() => {
    if (rewardsStatus === 'idle') {
      dispatch(fetchRewards());
    }
  }, [rewardsStatus, dispatch]);

  return (
    <Wrapper>
      <ProfileSection />
      <RewardsSection rewards={rewards} myRewards={myRewards} />
    </Wrapper>
  );
};
