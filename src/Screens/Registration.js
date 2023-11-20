import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextComponent,
  Image,
  KeyboardAvoidingView,
  Platform,
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

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  const [userName, setUserName] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Image source={ImagePath.amznlogo} style={styles.amzLogoStyel} />
        <Text style={styles.textStyle}>{String.REGISTER_TO_ACC}</Text>
        <TextInputComponent
          value={userName}
          onChangeText={value => setUserName(value)}
          placeholder={String.EMAIL}
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
      <CustomButton
        text={String.REGISTER}
        onPress={() => navigation.navigate(NavigationStrings.REGISTRATION)}
      />
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
