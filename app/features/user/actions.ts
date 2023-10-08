import { createAsyncThunk } from '@reduxjs/toolkit';
import { DriversRSPT, RootState } from 'types';
import { changeUserInfo } from './slice';
import cloneDeep from 'lodash/cloneDeep';

export const addFavorite = createAsyncThunk(
  'user/ADD_FAVORITE',
  (payload: DriversRSPT, { getState, dispatch }) => {
    const favorites = (getState() as RootState).user.favorites;

    if (favorites.some((I: DriversRSPT) => payload.driverId === I.driverId)) {
      // eslint-disable-next-line no-console
      console.log('test');
    } else {
      const newDriver = cloneDeep(payload);
      newDriver.isFavorite = true;

      dispatch(changeUserInfo({ key: 'favorites', value: [...favorites, newDriver] }));
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  'user/DELETE_FAVORITE',
  (payload: string, { dispatch }) => {
    return dispatch(changeUserInfo({ key: 'value', value: payload }));
  },
);
