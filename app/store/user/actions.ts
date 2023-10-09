import { AsyncStatus, Any } from 'types';

export const delay = (time: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const deleteFavorite = (value: string) => async (dispatch: Any) => {
  dispatch({ type: 'CHANGE_LOADER_STATUS', payload: AsyncStatus.LOADING });
  try {
    await delay(2000);
    dispatch({ type: 'CHANGE_LOADER_STATUS', payload: AsyncStatus.SUCCESS });
  } catch (e) {
    dispatch({ type: 'CHANGE_LOADER_STATUS', payload: AsyncStatus.FAIL });
  } finally {
    dispatch({ type: 'CHANGE_DRIVERS_INFO', payload: { key: 'value', value } });
  }
};
