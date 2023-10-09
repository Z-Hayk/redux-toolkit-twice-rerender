import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DriversTypes, ChangeDriversInfoProps } from './types';
import { AsyncStatus, Any } from 'types';

const initialState: DriversTypes = {
  value: '',

  data: [],
  offset: 0,

  stopPagination: false,
  isPaginationLoader: false,

  getDriversReqStat: AsyncStatus.LOADING,
  getNextDriversReqStat: AsyncStatus.NONE,
  refreshDriversReqStat: AsyncStatus.NONE,
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState: initialState,
  reducers: {
    setDriversInfo: (state: DriversTypes, { payload }: PayloadAction<DriversTypes>) => ({
      ...state,
      ...payload,
    }),
    changeDriversInfo: (
      state: DriversTypes,
      { payload }: PayloadAction<ChangeDriversInfoProps>,
    ) => {
      (state[payload.key] as Any) = payload.value;
    },
  },
});

export const { changeDriversInfo, setDriversInfo } = driversSlice.actions;
export const driversReducer = driversSlice.reducer;
