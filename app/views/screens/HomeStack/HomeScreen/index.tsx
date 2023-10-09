import React, { FunctionComponent, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { deleteFavorite } from 'features/user/slice'; // for tollkit
import { deleteFavorite } from 'store/user/actions';
import { Any, AsyncStatus, RootState } from 'types';

export const HomeScreen: FunctionComponent = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch() as Any;
  const loader = useSelector((state: RootState) => state.user.deleteFavoriteRequestStatus);

  return (
    <Fragment>
      <TextInput value={searchText} style={styles.textInput} onChangeText={setSearchText} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.touchableOpacity}
        onPress={() => dispatch(deleteFavorite(searchText))}
      >
        {loader === AsyncStatus.LOADING ? (
          <Text style={[styles.text, styles.loader]}>Loading</Text>
        ) : (
          <Text style={styles.text}>Send</Text>
        )}
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    fontSize: 30,
    borderColor: 'black',
  },
  touchableOpacity: {
    justifyContent: 'center',
    marginTop: 200,
    backgroundColor: 'green',
    height: 50,
    width: '100%',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  loader: {
    color: 'red',
  },
});
