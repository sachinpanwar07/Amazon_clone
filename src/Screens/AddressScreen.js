import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {moderateScale} from '../Style/Responsive';
import TextInputComponent from '../Components/TextInputComponent';
import CustomButton from '../Components/CustomButton';
import String from '../constants/String';
import Colors from '../Style/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode"
import { UserType } from '../../UserContext';
const AddressScreen = () => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
   const {userId,setUserId}=useContext(UserType)
    useEffect(()=>{
      const fetchUser=async()=>{
      const token=await AsyncStorage.getItem("authToken")
      const decodedToken=jwt_decode(token);
      console.log("Decoded Token:", decodedToken);
      const userId=decodedToken.userId;
      setUserId(userId)
      }
      fetchUser();
    },[])
 

    const handelAddAddress=()=>{

    }
  return (
    <ScrollView style={{marginTop: moderateScale(50)}}>
      <View style={{height: 50, backgroundColor: '#00CED1'}} />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          Add a New Address
        </Text>
        <TextInputComponent
          placeholder="india"
          inputStyle={styles.inputStyle}
        />
         <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          Full mame (First and last name)
        </Text>
         <TextInputComponent
         value={name}
          placeholder="india"
          onChangeText={(text)=>setName(text)}
          inputStyle={styles.inputStyle}
        />
         <Text style={{fontSize: 17, fontWeight: 'bold'}}>
         Mobile Number
        </Text>
         <TextInputComponent
         value={mobileNo}
         onChangeText={(text)=>setMobileNo(text)}
          placeholder="Mobile No"
          inputStyle={styles.inputStyle}
        />
         <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          Flat,House No,Building ,Company
        </Text>
        <TextInputComponent
         value={houseNo}
         onChangeText={(text)=>setHouseNo(text)}
          placeholder=""
          inputStyle={styles.inputStyle}
        />
         <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          Area,Strert,sector,village
        </Text>
         <TextInputComponent
             value={street}
             onChangeText={(text)=>setStreet(text)}
          inputStyle={styles.inputStyle}
        />
         <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          Landmark
        </Text>
         <TextInputComponent
         value={landmark}
         onChangeText={(text)=>setLandmark(text)}
          placeholder='Eg near appollo hospital'
          inputStyle={styles.inputStyle}
        />
         <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          pincode
        </Text>
         <TextInputComponent
         value={postalCode}
         onChangeText={(text)=>setPostalCode(text)}
          placeholder=" Enter pincode"
          inputStyle={styles.inputStyle}
        />
        
      </View>
      <CustomButton
       onPress={handelAddAddress}
      text={String.ADDADDRESS}
       textStyle={{color:Colors.blackColor}}
      />
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 0,
    marginTop: moderateScale(10),
    color:Colors.blackColor
  },
});
