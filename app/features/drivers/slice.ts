import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DriversTypes,
  ChangeDriversInfoProps,
  // GetNextDriversProps,
  // GetDriversProps,
} from './types';
import * as DriversActions from './actions';
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
  // extraReducers: builder => {
  //   builder.addCase(
  //     getDrivers.fulfilled as Any,
  //     (state: DriversTypes, { payload }: PayloadAction<GetDriversProps>) => ({
  //       ...state,
  //       data: payload.data,
  //       offset: payload.offset,
  //       getDriversReqStat: AsyncStatus.SUCCESS,
  //     }),
  //   );
  //   builder.addCase(getDrivers.rejected, (state: DriversTypes) => ({
  //     ...state,
  //     getDriversReqStat: AsyncStatus.FAIL,
  //   }));
  //
  //   builder.addCase(getNextDrivers.pending, (state: DriversTypes) => ({
  //     ...state,
  //     isPaginationLoader: true,
  //     getNextDriversReqStat: AsyncStatus.LOADING,
  //   }));
  //   builder.addCase(
  //     getNextDrivers.fulfilled as Any,
  //     (state: DriversTypes, { payload }: PayloadAction<GetNextDriversProps>) => ({
  //       ...state,
  //       data: payload.data,
  //       offset: payload.offset,
  //       stopPagination: payload.stopPagination,
  //       isPaginationLoader: false,
  //       getNextDriversReqStat: AsyncStatus.SUCCESS,
  //     }),
  //   );
  //   builder.addCase(getNextDrivers.rejected, (state: DriversTypes) => ({
  //     ...state,
  //     getNextDriversReqStat: AsyncStatus.FAIL,
  //   }));
  //
  //   builder.addCase(refreshDrivers.pending, (state: DriversTypes) => ({
  //     ...state,
  //     refreshDriversReqStat: AsyncStatus.LOADING,
  //   }));
  //   builder.addCase(
  //     refreshDrivers.fulfilled as Any,
  //     (state: DriversTypes, { payload }: PayloadAction<DriversRSPT[]>) => ({
  //       ...state,
  //       data: payload,
  //       refreshDriversReqStat: AsyncStatus.SUCCESS,
  //     }),
  //   );
  //   builder.addCase(refreshDrivers.rejected, (state: DriversTypes) => ({
  //     ...state,
  //     refreshDriversReqStat: AsyncStatus.FAIL,
  //   }));
  // },
});

export const { getDrivers, getNextDrivers, refreshDrivers } = DriversActions;
export const { changeDriversInfo, setDriversInfo } = driversSlice.actions;
export const driversReducer = driversSlice.reducer;
