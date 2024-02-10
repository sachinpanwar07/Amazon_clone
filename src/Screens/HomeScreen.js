import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Style/Colors';
import ImagePath from '../constants/ImagePath';
import {models} from 'mongoose';
import {moderateScale} from '../Style/Responsive';
import CustomText from '../Components/CustomText';
import TextInputComponent from '../Components/TextInputComponent';
const HomeScreen = () => {
  const [search, setSearch] = useState();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        flex: 1,
        backgroundColor: Colors.whiteColor,
      }}>
      <ScrollView>
        <View style={{backgroundColor:Colors.blueColor}}>
          <TextInputComponent
            value={search}
            onChangeText={value => setSearch(value)}
            placeholder="Search Amazon.in"
            imageSource={ImagePath.searchicon}
            backgroundColor={Colors.whiteColor}
            placeholderTextColor={Colors.blackColor}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
});
