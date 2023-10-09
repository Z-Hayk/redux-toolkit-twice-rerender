import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDriversInfo } from '../drivers/slice';
import { RootState, AsyncStatus } from 'types';

export const delay = (time: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const deleteFavorite = createAsyncThunk(
  'user/DELETE_FAVORITE',
  async (payload: string, { dispatch, fulfillWithValue }) => {
    try {
      await delay(2000);
      return fulfillWithValue(AsyncStatus.SUCCESS);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    } finally {
      dispatch(changeDriversInfo({ key: 'value', value: payload }));
    }
  },
  {
    condition: (_, { getState }) => {
      const user = (getState() as RootState).user;
      if (user.deleteFavoriteRequestStatus === AsyncStatus.LOADING) {
        return false;
      }
    },
  },
);
