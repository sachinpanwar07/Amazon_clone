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
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Style/Colors';
import ImagePath from '../constants/ImagePath';
import {models} from 'mongoose';
import {moderateScale, textScale} from '../Style/Responsive';
import CustomText from '../Components/CustomText';
import TextInputComponent from '../Components/TextInputComponent';
import Items from '../Components/Items';
import Carousel from '../Components/CarouselView';
import TrandingItems from '../Components/TrandingItems';
import TodayDeals from '../Components/TodayDeals';
import AllProduct from '../Components/AllProduct';
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from 'react-redux';
const HomeScreen = () => {
  const [search, setSearch] = useState();
  const [items, setItems] = useState([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);
  const cart=useSelector((state)=>state.cart.cart)
  console.log("ello",cart)
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 0: 0,
        flex: 1,
        backgroundColor: Colors.whiteColor,
      }}>
      <StatusBar
        backgroundColor={Colors.blueColor}
        barStyle="light-content"
        hidden={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={styles.addressViewStyle}>
          <Image
            source={ImagePath.locationicon}
            style={{width: moderateScale(20), height: moderateScale(20)}}
          />
          <Pressable>
            <Text style={{fontSize: textScale(15), fontWeight: 'bold'}}>
              Village Manda -tehri garhwal 249192
            </Text>
          </Pressable>
          <Image source={ImagePath.dropDownicon} style={styles.icon} />
        </View>
        <Items/>
        <Carousel/>
       <View>
       <TrandingItems/>
       </View>
       <Text style={{height:moderateScale(1),borderBlockColor:'#D0D0D0' ,borderWidth:2,marginTop:moderateScale(15)}}/>
      <Text style={{padding:moderateScale(10),fontSize:textScale(18),fontWeight:'bold',color:Colors.blackColor}}>Today's Deals</Text>
     <TodayDeals/>
     <Text style={{height:moderateScale(1),borderBlockColor:'#D0D0D0' ,borderWidth:2,marginTop:moderateScale(15)}}/>
     
      <AllProduct/>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  addressViewStyle: {
    backgroundColor: '#AFEEEE',
    flexDirection: 'row',
    padding: moderateScale(10),
    gap: 5,
    alignItems: 'center',
  },
});
