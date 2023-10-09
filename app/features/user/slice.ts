import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeUserInfoProps, UserTypes } from './types';
import { deleteFavorite } from './actions';
import { AsyncStatus } from 'types';

const initialState: UserTypes = {
  initialScreen: 'Auth',
  favorites: [],

  deleteFavoriteRequestStatus: AsyncStatus.NONE,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfo: (state: UserTypes, { payload }: PayloadAction<UserTypes>) => ({
      ...state,
      ...payload,
    }),
    changeUserInfo: (state: UserTypes, { payload }: PayloadAction<ChangeUserInfoProps>) => ({
      ...state,
      [payload.key]: payload.value,
    }),
  },

  extraReducers: builder => {
    builder.addCase(deleteFavorite.pending, (state: UserTypes) => {
      state.deleteFavoriteRequestStatus = AsyncStatus.LOADING;
    });
    builder.addCase(deleteFavorite.fulfilled, (state: UserTypes) => {
      state.deleteFavoriteRequestStatus = AsyncStatus.SUCCESS;
    });
    builder.addCase(deleteFavorite.rejected, (state: UserTypes) => {
      state.deleteFavoriteRequestStatus = AsyncStatus.FAIL;
    });
  },
});

export { deleteFavorite };
export const { setUserInfo, changeUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
