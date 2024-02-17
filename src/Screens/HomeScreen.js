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
import {moderateScale, textScale, width} from '../Style/Responsive';
import CustomText from '../Components/CustomText';
import TextInputComponent from '../Components/TextInputComponent';
import Items from '../Components/Items';
import Carousel from '../Components/CarouselView';
import TrandingItems from '../Components/TrandingItems';
import TodayDeals from '../Components/TodayDeals';
import AllProduct from '../Components/AllProduct';
import DropDownPicker from 'react-native-dropdown-picker';
import {BottomModal, SlideAnimation, ModalContent} from 'react-native-modals';
import {useSelector} from 'react-redux';
import NavigationStrings from '../Navigation/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [search, setSearch] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([
    {label: "Men's clothing", value: "men's clothing"},
    {label: 'jewelery', value: 'jewelery'},
    {label: 'electronics', value: 'electronics'},
    {label: "women's clothing", value: "women's clothing"},
  ]);
  const navigation=useNavigation()
  const cart = useSelector(state => state.cart.cart);
  console.log('ello', cart);
  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === 'android' ? 0 : 0,
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
          <Pressable
            style={styles.addressViewStyle}
            onPress={() => setModalVisible(!modalVisible)}>
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
          </Pressable>
          <Items />
          <Carousel />
          <View>
            <TrandingItems />
          </View>
          <Text
            style={{
              height: moderateScale(1),
              borderBlockColor: '#D0D0D0',
              borderWidth: 2,
              marginTop: moderateScale(15),
            }}
          />
          <Text
            style={{
              padding: moderateScale(10),
              fontSize: textScale(18),
              fontWeight: 'bold',
              color: Colors.blackColor,
            }}>
            Today's Deals
          </Text>
          <TodayDeals />
          <Text
            style={{
              height: moderateScale(1),
              borderBlockColor: '#D0D0D0',
              borderWidth: 2,
              marginTop: moderateScale(15),
            }}
          />

          <AllProduct />
        </ScrollView>
      </SafeAreaView>
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}>
        <ModalContent style={{width: width, height: moderateScale(400)}}>
          <View style={{marginBottom: moderateScale(8)}}>
            <Text style={{fontSize: textScale(16), fontWeight: '500'}}>
              Choose your Location
            </Text>
            <Text
              style={{
                marginTop: moderateScale(5),
                fontSize: textScale(16),
                color: Colors.gray2,
              }}>
              Select a delivery location to see product availabilty and delivery
              options
            </Text>
          </View>
          <ScrollView>
            {/* already added addresses */}
            <Pressable
            onPress={()=>{
              setModalVisible(false)
              navigation.navigate(NavigationStrings.ADD_ADDRESS)
            }
            }
              style={{
                width: moderateScale(140),
                height: moderateScale(140),
                borderColor: '#D0D0D0',
                marginTop: 10,
                borderWidth: 2,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign:'center',color:"#0066b2",fontWeight:"500"}}>Add an Address or pick-up point</Text>
            </Pressable>
          </ScrollView>
          <View style={{flexDirection:'column',gap:7,marginBottom:moderateScale(30)}}>
            <View style={{flexDirection:'row',alignItems:"center",gap:5}}>
              <Image source={ImagePath.locationicon}
               style={styles.icon}
              />
              <Text style={{color:"#0066b2",fontWeight:'400'}}>Enter an Indian pincode</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:"center",gap:5}}>
              <Image source={ImagePath.locationicon}
               style={styles.icon}
              />
              <Text style={{color:"#0066b2",fontWeight:'400'}}>Use My Current location</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:"center",gap:5}}>
              <Image source={ImagePath.locationicon}
               style={styles.icon}
              />
              <Text style={{color:"#0066b2",fontWeight:'400'}}>Deliver Outside India</Text>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
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
