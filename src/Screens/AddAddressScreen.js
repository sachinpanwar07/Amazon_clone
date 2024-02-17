import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../Style/Responsive';
import TextInputComponent from '../Components/TextInputComponent';
import Colors from '../Style/Colors';
import ImagePath from '../constants/ImagePath';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../Navigation/NavigationStrings';

const AddAddressScreen = () => {
  const [search, setSearch] = useState();
  const navigation=useNavigation()
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginTop: moderateScale(0)}}>
      <View style={styles.MainContainerStyle}>
        <TextInputComponent
          value={search}
          onChangeText={value => setSearch(value)}
          placeholder="Search Amazon.in"
          imageSource={ImagePath.searchicon}
          backgroundColor="white"
          placeholderTextColor={Colors.blackColor}
        />
        <TouchableOpacity>
          <Image source={ImagePath.micicon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: textScale(20), fontWeight: 'bold'}}>
          Your Addresses
        </Text>
        <Pressable
        onPress={()=>navigation.navigate(NavigationStrings.ADDRESSS)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: moderateScale(10),
            borderColor: '#D0D0D0',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: moderateScaleVertical(7),
            paddingHorizontal: moderateScale(5),
          }}>
          <Text>Add Address</Text>
          <Image
            source={ImagePath.dropDownicon}
            style={{
              height: moderateScale(22),
              width: moderateScale(22),
              marginRight: moderateScale(9),
              transform: [{rotate: '270deg'}],
            }}
          />
        </Pressable>
        <Pressable>{/* all the added add... */}</Pressable>
      </View>
    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  icon: {
    height: moderateScale(22),
    width: moderateScale(22),
    marginRight: moderateScale(9),
  },
  MainContainerStyle: {
    backgroundColor: Colors.blueColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
