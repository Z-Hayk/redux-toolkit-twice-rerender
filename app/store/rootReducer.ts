import { combineReducers } from 'redux';
import { RootState } from 'types';

import { userReducer } from './user/reducer';
import { driversReducer } from './drivers/reducer';

const projectReducer = combineReducers<RootState>({
  user: userReducer,
  drivers: driversReducer,
});

export default projectReducer;
