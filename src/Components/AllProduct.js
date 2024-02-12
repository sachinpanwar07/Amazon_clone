import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, textScale} from '../Style/Responsive';
import Colors from '../Style/Colors';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const renderProductItem = ({item}) => (
    <View style={styles.renderContainer}>
      <TouchableOpacity style={styles.productItem}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{`$${item.price}`}</Text>
        <Text style={styles.ratingtext}>{item.rating.rate} rating</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#FFC72C",
          width: moderateScale(150),
          margin: moderateScale(8),
          borderRadius: moderateScale(50),
          height: moderateScale(45),
        }}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productList}
        numColumns={2}
        key={(item, index) => index.toString()} // Add this key prop
      />
    </View>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
  },
  header: {
    fontSize: textScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },
  productList: {
    flexGrow: 1,
  },
  productItem: {
    flex: 1,
    margin: moderateScale(10),
    padding: moderateScale(10),

    borderRadius: moderateScale(10),
  },
  productImage: {
    width: '100%',
    height: moderateScale(150),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(5),
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: textScale(16),
    marginBottom: moderateScale(5),
  },
  productPrice: {
    fontSize: textScale(14),
    color: 'green',
  },
  ratingtext: {
    fontSize: textScale(16),
    marginBottom: moderateScale(5),
    color: '#8B8000',
    fontWeight: 'bold',
  },
  renderContainer: {
    flex: 1,
  },
});
