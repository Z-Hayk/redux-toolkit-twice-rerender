import { AsyncStatus, DriversRSPT } from 'types';

export interface DriversTypes {
  value: string;

  data: DriversRSPT[];
  offset: number;

  stopPagination: boolean;
  isPaginationLoader: boolean;

  getDriversReqStat: AsyncStatus;
  getNextDriversReqStat: AsyncStatus;
  refreshDriversReqStat: AsyncStatus;
}

export interface ChangeDriversInfoProps {
  key: keyof DriversTypes;
  value: DriversRSPT[] | string;
}

export interface GetDriversProps {
  data: DriversRSPT[];
  offset: number;
}

export interface GetNextDriversProps {
  data: DriversRSPT[];
  stopPagination: boolean;
  offset: number;
}
