
import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import {Store} from './src/redux/index'
import {StackNavigation} from './src/screens/stackNavigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <StackNavigation />
      </NavigationContainer>
      </Provider>
  );
};



export default App;
