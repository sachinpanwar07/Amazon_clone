import React from 'react';
import { View, Text } from 'react-native';

const ProductInformation = ({ route }) => {
  const { id, title, price, carouselImages, color, size, oldPrice } = route.params;

  return (
    <View>
      <Text>ID: {id}</Text>
      <Text>Title: {title}</Text>
      <Text>Price: {price}</Text>
      {/* Display other parameters as needed */}
    </View>
  );
};

export default ProductInformation;
