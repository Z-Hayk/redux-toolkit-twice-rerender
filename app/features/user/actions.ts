import { createAsyncThunk } from '@reduxjs/toolkit';
import { DriversRSPT } from 'types';
import { changeUserInfo } from './slice';
import cloneDeep from 'lodash/cloneDeep';
import { getStateHandler } from 'utils';

export const addFavorite = createAsyncThunk(
  'user/ADD_FAVORITE',
  (payload: DriversRSPT, { getState, dispatch }) => {
    const favorites = getStateHandler(getState).user.favorites;

    if (favorites.some((I: DriversRSPT) => payload.driverId === I.driverId)) {
    } else {
      const newDriver = cloneDeep(payload);
      newDriver.isFavorite = true;

      dispatch(changeUserInfo({ key: 'favorites', value: [...favorites, newDriver] }));
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  'user/DELETE_FAVORITE',
  (payload: string, { getState, dispatch }) => {
    return dispatch(changeUserInfo({ key: 'value', value: payload }));
  },
);
