import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, Animated } from 'react-native';

const { width } = Dimensions.get('window');
import images from './CarouselImages';// Import your image data
import { moderateScale } from '../Style/Responsive';
import Colors from '../Style/Colors';

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef();
  const dotPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < images.length - 1) {
        scrollRef.current.scrollTo({
          animated: true,
          x: width * (currentIndex + 1),
          y: 0,
        });
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        scrollRef.current.scrollTo({
          animated: true,
          x: 0,
          y: 0,
        });
        setCurrentIndex(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  useEffect(() => {
    Animated.spring(dotPosition, {
      toValue: currentIndex,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  const renderDots = () => {
    return images.map((_, index) => {
      const opacity = dotPosition.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      });
      return <Animated.View key={index} style={[styles.dot, { opacity }]} />;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(newIndex);
        }}>
        {images.map((item, index) => (
          <Image key={index} source={{ uri: item}} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.blueColor
  },
  image: {
    width:width,
    height: moderateScale(150), // Adjust height as needed
    resizeMode:'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    width: moderateScale(12),
    height: moderateScale(6),
    borderRadius: moderateScale(2),
    backgroundColor:Colors.whiteColor,
    marginHorizontal: moderateScale(5),
  },
});

export default Carousel;
