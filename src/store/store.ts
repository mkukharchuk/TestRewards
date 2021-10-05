import { configureStore } from '@reduxjs/toolkit';
import rewardsReducer from 'src/containers/RewardsFeature/rewardsSlice';

export const store = configureStore({
  reducer: {
    rewards: rewardsReducer,
    // myRewards: myRewardsReducer,
    // profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
