import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Colors from '../Style/Colors';
import {Image, StyleSheet} from 'react-native';
import ImagePath from '../constants/ImagePath';
import NavigationStrings from './NavigationStrings';
import { HomeScreen } from '../Screens';
const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {

  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={NavigationStrings.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: Colors.black,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: Colors.theme},
      }}>
      <BottomTab.Screen
        name={NavigationStrings.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagePath.homeicon}
                style={[styles.icon, {tintColor: focused ? 'blue' : 'grey'}]}
              />
            );
          },
          tabBarStyle: {
            tabBarActiveTintColor: 'grey',
          },
        }}
      />
   
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {},
  icon: {
    width: 30,
    height: 30,
  },
});

export default TabRoutes;