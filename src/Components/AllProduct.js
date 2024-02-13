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
import DropDownPicker from 'react-native-dropdown-picker';
import NavigationStrings from '../Navigation/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('jewelery');
  const [open, setOpen] = useState(false);
  const navigation=useNavigation()
  const items = [
    {label: "Men's clothing", value: "men's clothing"},
    {label: 'Jewelery', value: 'jewelery'},
    {label: 'Electronics', value: 'electronics'},
    {label: "Women's clothing", value: "women's clothing"},
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
        );
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, [category]);

  const renderProductItem = ({item}) => {
    if (item.category === category) {
      return (
        <View style={styles.renderContainer}>
          <TouchableOpacity style={styles.productItem} onPress={() => {navigation.navigate(NavigationStrings.PRODUCT_INFO, {
                    id: item.id,
                    title: item.title,
                    price: item?.price,
                    carouselImages: item.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item,
                  })}}>
            <Image source={{uri: item.image}} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{`$${item.price}`}</Text>
            <Text style={styles.ratingtext}>{item.rating.rate} rating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFC72C',
              width: moderateScale(150),
              margin: moderateScale(8),
              borderRadius: moderateScale(50),
              height: moderateScale(45),
            }}
            >
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>
      <DropDownPicker
        style={{
          borderColor: '#B7B7B7',
          height: 30,
          marginBottom: open ? 120 : 15,
        }}
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        placeholder={category}
        placeholderStyle={styles.placeholderStyles}
        zIndex={3000}
        zIndexInverse={1000}
        onOpen={() => setOpen(true)}
      />
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productList}
        numColumns={2}
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
