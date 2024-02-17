import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextComponent,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import NavigationStrings from '../Navigation/NavigationStrings';
import TextInputComponent from '../Components/TextInputComponent';
import String from '../constants/String';
import ImagePath from '../constants/ImagePath';
import {moderateScale, textScale} from '../Style/Responsive';
import Colors from '../Style/Colors';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import axios from 'axios';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  const [name, setName] = useState('');

  const handelRegisterUser = () => {
      const user = {
        name: name,
        email: email,
        password: password,
      };
  
      // send a POST  request to the backend API to register the user
      axios
        .post("http://192.168.43.218:3000/register", user)
        .then((response) => {
          console.log(response);
          Alert.alert(
            "Registration successful",
            "You have been registered Successfully"
          );
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          Alert.alert(
            "Registration Error",
            "An error occurred while registering"
          );
          console.log("registration failed", error);
        });
    };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Image source={ImagePath.amznlogo} style={styles.amzLogoStyel} />
        <Text style={styles.textStyle}>{String.REGISTER_TO_ACC}</Text>
        <TextInputComponent
          value={name}
          onChangeText={value => setName(value)}
          placeholder={String.Name}
          imageSource={ImagePath.amznuser}
        />
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
      <CustomButton text={String.REGISTER} onPress={() => handelRegisterUser()} />
      <View style={styles.textContainer}>
        <Text style={{fontSize: textScale(16)}}>Already have an account?</Text>
        <CustomText text={String.SIGN_IN} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
