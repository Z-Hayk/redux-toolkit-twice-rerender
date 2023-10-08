import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDrivers = createAsyncThunk('drivers/GET_DRIVERS', async () => {
  // const limit = PAGINATION_OFFSET;

  try {
    // const driversData: GetDriversReqRSPT = await Drivers.getDriversReq({
    //   limit,
    //   offset: 0,
    // });
    //
    // FOR_DEBUGGING(driversData);
    //
    // return { data: driversData.data.MRData.DriverTable.Drivers, offset: limit };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  }
});

export const getNextDrivers = createAsyncThunk(
  'drivers/GET_NEXT_DRIVERS',
  async () => {
    try {
      // const driversData: GetDriversReqRSPT = await Drivers.getDriversReq({
      //   limit: PAGINATION_LIMIT,
      //   offset,
      // });
      //
      // FOR_DEBUGGING(driversData);
      //
      // const newData = driversData.data.MRData.DriverTable.Drivers;
      // const payloadObj = {
      //   data: [...data, ...(newData || [])],
      //   stopPagination: false,
      //   offset: offset + PAGINATION_LIMIT,
      // };
      //
      // if (newData.length !== PAGINATION_LIMIT) {
      //   payloadObj.stopPagination = true;
      // }
      //
      // return payloadObj;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error', error);
    }
  },
  // {
  //   condition: (_, { getState }) => {
  //     // const drivers = getStateHandler(getState).drivers;
  //     // if (drivers.getNextDriversReqStat === AsyncStatus.LOADING) {
  //     //   return false;
  //     // }
  //   },
  // },
);

export const refreshDrivers = createAsyncThunk('drivers/REFRESH_DRIVERS', async () => {
  // const { offset } = getState().drivers;

  try {
    // const driversData: GetDriversReqRSPT = await Drivers.getDriversReq({
    //   limit: offset,
    //   offset: 0,
    // });
    // FOR_DEBUGGING(driversData);
    // return driversData.data.MRData.DriverTable.Drivers;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  }
});
