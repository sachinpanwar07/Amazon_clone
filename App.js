import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './src/Navigation/AuthStack';
import MainStack from './src/Navigation/MainStack';
import TabRoutes from './src/Navigation/TabRoutes';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import {ModalPortal} from 'react-native-modals';
import {UserContext} from './UserContext';
const App = () => {
  return (
    <Provider store={Store}>
      <UserContext>
        <Routes />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
