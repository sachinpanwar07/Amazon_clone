import {View, Text} from 'react-native';
import React from 'react';
import NavigationStrings from './NavigationStrings';
import TabRoutes from './TabRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function () {
  return (
    <>
          <Stack.Screen
        name={NavigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      
      />
      
    </>
  );
}