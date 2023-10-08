import React, { FunctionComponent } from 'react';
import { TextInput } from 'react-native';
import * as UserActions from 'features/user/slice';
import { useAction, useSelector } from 'utils';
import { RootState } from 'types';

export const HomeScreen: FunctionComponent = () => {
  const value = useSelector((state: RootState) => state.user.value);

  const deleteFavorite = useAction(UserActions.deleteFavorite);

  return (
    <TextInput style={{ borderWidth: 1, borderColor: 'black' }} value={value} onChangeText={asdasd => deleteFavorite(asdasd)} />
  );
};
