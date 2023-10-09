import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDriversInfo } from '../drivers/slice';

export const delay = (time: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const deleteFavorite = createAsyncThunk(
  'user/DELETE_FAVORITE',
  async (payload: string, { dispatch }) => {
    try {
      await delay(2000);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    } finally {
      dispatch(changeDriversInfo({ key: 'value', value: payload }));
    }
  },
);
