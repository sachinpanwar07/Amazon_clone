import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as screen from '../Screens/'
import NavigationStrings from './NavigationStrings';
export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
    
        name={NavigationStrings.LOGIN}
        component={screen.LoginScreen}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name={NavigationStrings.REGISTRATION}
        component={screen.Registration}
        options={{headerShown: true}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
