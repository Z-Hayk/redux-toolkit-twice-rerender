import { DriversRSPT, AsyncStatus } from 'types';

export interface UserTypes {
  initialScreen: 'Auth' | 'Home';
  favorites: DriversRSPT[];

  deleteFavoriteRequestStatus: AsyncStatus;
}

export interface ChangeUserInfoProps {
  key: keyof UserTypes;
  value: string | DriversRSPT[];
}
