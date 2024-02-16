import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './src/Navigation/AuthStack';
import MainStack from './src/Navigation/MainStack';
import TabRoutes from './src/Navigation/TabRoutes';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
const App = () => {
  return(
    // <MainStack/>
    // <AuthStack/>
     <Provider store={Store}>
       <Routes/>   
     </Provider>
  )
};

export default App;

const styles = StyleSheet.create({});
