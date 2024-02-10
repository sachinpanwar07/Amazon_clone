import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextComponent,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavigationStrings from '../Navigation/NavigationStrings';
import TextInputComponent from '../Components/TextInputComponent';
import String from '../constants/String';
import ImagePath from '../constants/ImagePath';
import {moderateScale, textScale} from '../Style/Responsive';
import Colors from '../Style/Colors';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  useEffect(()=>{
    const  checkLoginStatus=async()=>{
      try {
        const token=await AsyncStorage.getItem("authToken")
        if(token){
          navigation.replace(NavigationStrings.TAB_ROUTES)
        }
        
      } catch (error) {
        console.log("error message",error)
      }
    }
    checkLoginStatus()
   
  },[])
    

  const handelLogin=()=>{
    const user={
      email:email,
      password:password
    }
    axios.post("http://192.168.43.368:3000/login",user).then((response)=>{
      console.log(response)
      const token=response.data.token;
      AsyncStorage.setItem("authToken",token)
      navigation.navigate(NavigationStrings.HOME_SCREEN)
    }).catch((error)=>{
      Alert.alert("Login Error","Invalid  Email")
      console.log(error)
    })
  }
  return (
    <View style={styles.container}>
      <View>
        <Image source={ImagePath.amznlogo} style={styles.amzLogoStyel} />
        <Text style={styles.textStyle}>{String.LOGGED_IN_YOUR_ACC}</Text>
        <TextInputComponent
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder={String.EMAIL}
          imageSource={ImagePath.emailicon}
        />
        <TextInputComponent
          value={password}
          placeholder={String.PASSWORD}
          onChangeText={value => setPassword(value)}
          imageSource={ImagePath.lockicon}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: moderateScale(13),
          }}>
          <Text>{String.KEEP_ME_LOGGED_IN}</Text>
          <Text style={{color: Colors.blueColor}}>{String.FORGOT_PASS}</Text>
        </View>
      </View>
      <CustomButton
        text={String.LOGIN}
        onPress={() =>handelLogin()}
      />
      <View style={styles.textContainer}>
        <Text style={{fontSize: textScale(16)}}>Don't have an account?</Text>
        <CustomText text={String.SIGN_UP} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  amzLogoStyel: {
    width: moderateScale(200),
    height: moderateScale(100),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  textStyle: {
    fontSize: textScale(16),
    color: Colors.blackColor,
    textAlign: 'center',
    marginBottom: moderateScale(60),
  },
  textContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
