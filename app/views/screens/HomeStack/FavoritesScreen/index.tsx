import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import * as UserActions from 'features/user/slice';
import { useAction, useSelector } from 'utils';
import { RootState } from 'types';

export const FavoritesScreen: FunctionComponent = () => {
  const value = useSelector((state: RootState) => state.user.value);

  const deleteFavorite = useAction(UserActions.deleteFavorite);

  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ textAlign: 'center' }}>Hello</Text>
    </View>
  );
};
