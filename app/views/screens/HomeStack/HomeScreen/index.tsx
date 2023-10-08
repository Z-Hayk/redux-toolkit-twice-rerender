import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
import { deleteFavorite } from 'features/user/slice';
import { RootState, Any } from 'types';

export const HomeScreen: FunctionComponent = () => {
  const dispatch = useDispatch() as Any;
  const value = useSelector((state: RootState) => state.user.value);

  return (
    <TextInput
      value={value}
      style={styles.textInput}
      onChangeText={text => dispatch(deleteFavorite(text))}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
