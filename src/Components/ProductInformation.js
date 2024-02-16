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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{position: 'absolute', top: 10, right: 10}}>
                <Image
                  source={ImagePath.shareIcon}
                  style={{
                    width: moderateScale(30),
                    height: moderateScale(30),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  width: moderateScale(50),
                  height: moderateScale(50),
                  borderRadius: moderateScale(25),
                  backgroundColor: '#C60C30',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: moderateScale(5),
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: Colors.whiteColor,
                    textAlign: 'center',
                    fontSize: textScale(14),
                    fontWeight: 'bold',
                  }}>
                  20% off{' '}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{position: 'absolute', bottom: 10, left: 10}}>
              <Image
                source={ImagePath.hearticon}
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.productDetailsStyle}>
        <Text
          style={{
            fontSize: textScale(15),
            fontWeight: '400',
            color: Colors.blackColor,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: textScale(18),
            color: Colors.blueColor,
            fontWeight: 'bold',
            marginTop: moderateScale(6),
          }}>
          ₹{price}
        </Text>
      </View>
      <Text style={{height: 1, borderColor: '#D0D0D0', borderWidth: 1}} />
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text>Color:</Text>
        <Text style={{fontSize: textScale(15), fontWeight: 'bold'}}>
          {color}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text>Size:</Text>
        <Text style={{fontSize: textScale(15), fontWeight: 'bold'}}>
          {size}
        </Text>
      </View>
      <Text style={{height: 1, borderColor: '#D0D0D0', borderWidth: 1}} />
      <View style={{padding: moderateScale(10)}}>
        <Text
          style={{
            fontSize: textScale(15),
            fontWeight: 'bold',
            marginVertical: moderateScaleVertical(5),
          }}>
          Total:{price}
        </Text>
        <Text style={{color: '#00CED1'}}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins{}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: moderateScaleVertical(5),
          alignItems: 'center',
          gap: 5,
        }}>
        <Image source={ImagePath.locationicon} style={styles.icon} />
        <Text style={{fontSize: textScale(15), fontWeight: '500'}}>
          Deliver To sachin -Village Manda 249192
        </Text>
      </View>
      <Text
        style={{
          color: 'green',
          marginHorizontal: moderateScale(10),
          fontWeight: '500',
        }}>
        IN Stock{' '}
      </Text>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFC72C',
          width: "95%",
          borderRadius: moderateScale(50),
          height: moderateScale(45),
          marginHorizontal:moderateScale(10),
          marginVertical:moderateScale(10)
        }}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFAC1C',
          width: "95%",
          borderRadius: moderateScale(50),
          height: moderateScale(45),
          marginHorizontal:moderateScale(10),
          marginVertical:moderateScale(10)
        }}>
        <Text>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductInformation;

const styles = StyleSheet.create({
  ProductInformationContainer: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
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
  productDetailsStyle: {
    margin: moderateScale(10),
  },
});
