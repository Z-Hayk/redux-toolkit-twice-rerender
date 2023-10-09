import { DriversTypes } from './types';
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

export const driversReducer = (state = { ...initialState }, action: Any): DriversTypes => {
  switch (action.type) {
    case 'SET_DRIVERS_INFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'CHANGE_DRIVERS_INFO':
      return { ...state, [action.payload.key]: action.payload.value };
    default: {
      return state;
    }
  }
};
