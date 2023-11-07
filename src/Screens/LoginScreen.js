import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import NavigationStrings from '../Navigation/NavigationStrings';
const LoginScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.REGISTRATION)}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
