import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as screen from '../Screens/'
import NavigationStrings from './NavigationStrings';
export default function AuthStack(Stack) {
  // const Stack = createNativeStackNavigator();
  return (
   <>
   
   <Stack.Screen
        name={NavigationStrings.REGISTRATION}
        component={screen.Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
    
        name={NavigationStrings.LOGIN}
        component={screen.LoginScreen}
        options={{headerShown: false}}
      />

     
       {/* <Stack.Screen
        name={NavigationStrings.HOME_SCREEN}
        component={screen.HomeScreen}
        options={{headerShown: false}}
      /> */}
    </>
  );
}
