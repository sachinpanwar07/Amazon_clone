import {View, Text} from 'react-native';
import React from 'react';
import NavigationStrings from './NavigationStrings';
import TabRoutes from './TabRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductInformation} from '../Screens';
import * as screen from '../Screens';
// const Stack = createNativeStackNavigator();
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.TAB_ROUTES}
        component={screen.TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings.PRODUCT_INFO}
        component={screen.ProductInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings.ADD_ADDRESS}
        component={screen.AddAddressScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={NavigationStrings.ADDRESSS}
        component={screen.AddressScreen}
        options={{headerShown: false}}
      />
    </>
  );
}
