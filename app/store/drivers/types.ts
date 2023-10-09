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
