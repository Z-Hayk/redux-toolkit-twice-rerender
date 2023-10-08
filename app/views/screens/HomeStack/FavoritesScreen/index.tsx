import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FavoritesScreen: FunctionComponent = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
});
