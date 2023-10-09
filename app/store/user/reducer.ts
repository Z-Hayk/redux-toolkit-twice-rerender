import { UserTypes } from './types';
import { Any, AsyncStatus } from 'types';

const initialState: UserTypes = {
  initialScreen: 'Auth',
  favorites: [],

  deleteFavoriteRequestStatus: AsyncStatus.NONE,
};

export const userReducer = (state = { ...initialState }, action: Any): UserTypes => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'CHANGE_USER_INFO':
      return { ...state, [action.payload.key]: action.payload.value };
    case 'CHANGE_LOADER_STATUS':
      return { ...state, deleteFavoriteRequestStatus: action.payload };
    default: {
      return state;
    }
  }
};
