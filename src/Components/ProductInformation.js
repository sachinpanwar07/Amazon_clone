import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../Style/Responsive';
import Colors from '../Style/Colors';
import TextInputComponent from './TextInputComponent';
import ImagePath from '../constants/ImagePath';
import {width, height} from '../Style/Responsive';
const ProductInformation = ({route}) => {
  const {id, title, price, carouselImages, color, size, oldPrice} =
    route.params;
  const [search, setSearch] = useState();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.ProductInformationContainer}>
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

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carouselImages.map((item, index) => (
          <ImageBackground
            style={styles.ImageBackgroundStyle}
            source={{uri: item}}
            key={index}>
            <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
              <View
                style={{
                  width: moderateScale(50),
                  height: moderateScale(50),
                  borderRadius: moderateScale(25),
                  backgroundColor:"#C60C30",
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin:moderateScale(5),
                  flexDirection:'row'
                }}>
                <Text
                  style={{
                    color: Colors.whiteColor,
                    textAlign: 'center',
                    fontSize: textScale(14),
                    fontWeight:"bold"
                  }}>
                  20% off{' '}
                </Text>
              </View>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:2,width:moderateScale(40),height:moderateScale(40),borderRadius:moderateScale(25), margin:moderateScale(5),}}>
              <Image source={ImagePath.shareIcon}
                 style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  borderRadius: moderateScale(20),
                  backgroundColor:"#E0E0E0",
                  flexDirection:'row',
                 
                  resizeMode:'contain'
                }}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:2,width:moderateScale(40),height:moderateScale(40),borderRadius:moderateScale(25), margin:moderateScale(5),}}>
              <Image source={ImagePath.hearticon}
                 style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  backgroundColor:"#E0E0E0",
                  justifyContent:'flex-start',
                  alignItems:'center',
                 flexDirection:'row',
                  resizeMode:'contain',
                 alignItems:'center'
                
                }}
              />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <Text>ID: {id}</Text>
      <Text>Title: {title}</Text>
      <Text>Price: {price}</Text>
      {/* Display other parameters as needed */}
    </ScrollView>
  );
};

export default ProductInformation;

const styles = StyleSheet.create({
  ProductInformationContainer: {
    flex: 1,

    backgroundColor: Colors.whiteColor,
  },
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
  icon: {
    height: moderateScale(22),
    width: moderateScale(22),
    marginRight: moderateScale(9),
  },
  ImageBackgroundStyle: {
    width,
    height: moderateScale(320),
    marginTop: moderateScaleVertical(25),
    resizeMode: 'contain',
   
  },
});
