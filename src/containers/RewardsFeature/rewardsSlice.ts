import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'src/services/api';
import type { RootState } from '../../store/store';
import { rewardsMockData } from './mockRewards';

export interface RewardItem {
  id: number;
  rewardie: string;
  rewarder: string;
  date: string;
  message: string;
  rewardieId: number;
}
interface RewardsState {
  rewards: RewardItem[];
  status: string;
  error: string | null;
}

const initialState: RewardsState = {
  rewards: [],
  status: 'idle',
  error: null,
};

export const fetchRewards = createAsyncThunk('rewards/fetchRewards', async () => {
  const response = await api.get('/rewards');
  return response.data;
});

export const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRewards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRewards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rewards = state.rewards.concat(action.payload);
      })
      .addCase(fetchRewards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.rewards = rewardsMockData;
      });
  },
});

export const selectRewards = (state: RootState) => state.rewards.rewards;
export const selectRewardsStatus = (state: RootState) => state.rewards.status;

export const selectMyRewards = (state: RootState) => (
  state.rewards.rewards.filter((reward) => reward.rewardieId === 12)
);

export default rewardsSlice.reducer;
