/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from './app/AppContainer';
// import store from './app/features'; // FOR REDUX TOOLKIT
import store from './app/store';

const App: React.FC = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
