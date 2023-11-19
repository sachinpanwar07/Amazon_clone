import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextComponent,
  Image
} from 'react-native';
import React ,{useState}from 'react';
import NavigationStrings from '../Navigation/NavigationStrings';
import TextInputComponent from '../Components/TextInputComponent';
import String from '../constants/String';
import ImagePath from '../constants/ImagePath';
import { moderateScale, textScale } from '../Style/Responsive';
import Colors from '../Style/Colors';
import CustomButton from '../Components/CustomButton';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  return (
    <View>
      <View>
        <Image source={ImagePath.amznlogo} style={styles.amzLogoStyel}/>
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
      <View style={{flexDirection:'row',
     justifyContent:'space-between',
     margin:moderateScale(13)
    }}>
      <Text>{String.KEEP_ME_LOGGED_IN}</Text>
      <Text  style={{color:Colors.blueColor}}>{String.FORGOT_PASS}</Text>
      </View>
      </View>
      <CustomButton text={String.LOGIN}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  amzLogoStyel:{
    width:moderateScale(200),
    height:moderateScale(100),
    resizeMode:"contain",
    alignSelf:"center",
    marginTop:moderateScale(20)
    
  },
  textStyle:{
    fontSize:textScale(16),
    color:Colors.blackColor,
    textAlign:'center',
    marginBottom:moderateScale(60)
  }
});
