import { DriversRSPT, AsyncStatus } from 'types';

export interface UserTypes {
  initialScreen: 'Auth' | 'Home';
  favorites: DriversRSPT[];

  deleteFavoriteRequestStatus: AsyncStatus;
}
