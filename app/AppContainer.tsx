import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreens } from 'navigation';
import { RootState } from './types';

export const AppContainer: FunctionComponent = () => {
  const value = useSelector((state: RootState) => state.drivers.value);
  // eslint-disable-next-line no-console
  console.log(value);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <HomeScreens />
    </NavigationContainer>
  );
};
