import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDriversInfo } from '../drivers/slice';
import { batch } from 'react-redux';
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
      batch(() => {
        dispatch(changeDriversInfo({ key: 'value', value: payload }));
        return fulfillWithValue(AsyncStatus.SUCCESS);
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
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
