import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import String from '../constants/String';
import {textScale} from '../Style/Responsive';

const CustomText = ({
  text = '',
  onPress = () => {},
  textStyle = {},
  textContainer = {},
  ...props
}) => {
  return <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(16),
  },
});
