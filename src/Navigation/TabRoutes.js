import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Colors from '../Style/Colors';
import {Image, StyleSheet} from 'react-native';
import ImagePath from '../constants/ImagePath';
import NavigationStrings from './NavigationStrings';
import * as screen from '../Screens';
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
        tabBarStyle: {backgroundColor: 'red'},
      }}>
      <BottomTab.Screen
        name={NavigationStrings.HOME_SCREEN}
        component={screen.HomeScreen}
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
      <BottomTab.Screen
        name={NavigationStrings.PROFILE}
        component={screen.ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagePath.amznuser}
                style={[styles.icon, {tintColor: focused ? 'blue' : 'grey'}]}
              />
            );
          },
          tabBarStyle: {
            tabBarActiveTintColor: 'grey',
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.ADD_CART}
        component={screen.AddCart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={ImagePath.carticon}
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
