import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './App/store/configureStore';
import MainDrawernavigation from './Navigation/MainDrawernavigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <MainDrawernavigation />
        </NavigationContainer>
      </Provider>
      <StatusBar
        backgroundColor="white"
        hidden={false}
        barStyle="dark-content"
      />
    </>
  );
};
export default App;
